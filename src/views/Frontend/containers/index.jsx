import React, {useContext, useState, useEffect} from 'react';
import { Route, Redirect, Switch} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import axios from 'axios'
import Header from '../components/Header';
import Login from '../components/Login';
import Movies from '../components/Movies';
import Register from '../components/Register';
import SingleMovie from '../components/SingleMovie';
import SingleUser from '../components/SingleUser';
import Users from '../components/Users';
import { UserContext } from "../../../index";
import { log, success, error } from "../hooks/logs"; 

export default function App(){
    const[movies, setMovies] = useState([])
    const[name, setName] = useState('')
    const[movie, setMovie] = useState({})
    const[users, setUsers] = useState([])
    const[userID, setUserID] = useState('')
    const {setUser} = useContext(UserContext);

    //busca peliculas
    useEffect(()=>{
        axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=aae34333&s=harry`)
        .then(res => res.data.Search)
        .then(searchMovies => setMovies(searchMovies))
    },[name])

    useEffect(()=>{
        axios.get("/api/register")
        .then(res => res.data)     
        .then(usersServer => setUsers(usersServer))
    },[])

    useEffect(() => {
        log(`fetching user...`);
        axios.get("/api/me")
        .then((res) => res.data)
        .then((user) => {
            success(`found user ${user.email}`);
            setUser(user);
        })
        .catch(({ response }) => {
            error(response.status, response.statusText);
        });
    },[]);

    function handleChange(evento){
        const value = evento.target.value
    
        setName(value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=aae34333&s=${name}`)
        .then(res => (res.data.Search))
        .then(searchName => setMovies(searchName))
    };

    function selectedMovie(movieId) {
        axios.get(`http://www.omdbapi.com/?i=${movieId}&apikey=aae34333`)
        .then(res => res.data)
        .then(movieServer => setMovie(movieServer))
    }

    function selectedUser(userId) {
        axios.get(`/api/register/${userId}`)
        .then(res => res.data)
        .then(userServer => setUserID(userServer))
    }

    return(
        <div>
            <Header handleChange={handleChange} handleSubmit={handleSubmit} name={name}/>
            <Switch>
                <Route path="/register" render={()=><Register/>}/>
                <Route path="/login" render={()=><Login/>}/>
                <Route path="/users/:id" render={({match})=> 
                <SingleUser selectedUser={selectedUser} 
                userId={match.params.id}
                user={userID}/> }/>
                <Route path="/users" render={()=><Users users={users}/>}/>
                <Route path="/movies/:id" 
                render={({match})=> 
                <SingleMovie selectedMovie={selectedMovie} 
                movieId={match.params.id} 
                movie={movie}/>}/>
                <Route exact path="/movies" render={()=> <Movies movies={movies}/>}/>
                <Route path="/favorites" render={()=><h1>favoritas</h1>}/>
                <Redirect from="/" to="/movies" />
            </Switch>
        </div>
    )
}


