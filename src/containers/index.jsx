import React, {useContext, useState, useEffect} from 'react';
import { Route, Redirect, Switch, useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import axios from 'axios'
import Header from './header';
import Login from './login';
import Movies from './movies';
import Register from './register';
import SingleMovie from './singleMovie';
import Users from './users';
import { UserContext } from "../index";
import { log, success, error } from "../hooks/logs"; 


export default function App(){
    const[movies, setMovies] = useState([])
    const[name, setName] = useState('')
    const[movie, setMovie] = useState({})
    const[userID, setUserID] = useState('')
    const {setUser} = useContext(UserContext);
    const history = useHistory()

    //busca peliculas
    useEffect(()=>{
        axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=aae34333&s=harry`)
        .then(res => res.data.Search)
        .then(searchMovies => setMovies(searchMovies))
    },[name])

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
        .then(()=> history.push(`/movies/${name}`))
    };

    function selectedMovie(movieId) {
        axios.get(`http://www.omdbapi.com/?i=${movieId}&apikey=aae34333`)
        .then(res => res.data)
        .then(movieServer => setMovie(movieServer))
        .then(()=> setName(''))
    }

    function selectedUser() {
        axios.get(`/api/register/`)
        .then(res => console.log(res.data))
        .then(userServer => setUserID(userServer))
    }
    return(
        <div>
            <Header handleChange={handleChange} handleSubmit={handleSubmit} name={name}/>
            <Switch>
                <Route path="/register" render={()=><Register/>}/>
                <Route path="/login" render={()=><Login/>}/>
    
                <Route path="/users" render={()=><Users/>}/>
               
                <Route path="/movies/:name/:id" 
                render={({match})=>
                <SingleMovie selectedMovie={selectedMovie} 
                movieId={match.params.id} 
                movie={movie}
                name={name}/>}/>

                <Route exact path="/movies/:name" render={()=> <Movies movies={movies} name={name}/>}/>
                <Route exact path="/movies/" render={()=> <Movies movies={movies}/>}/>
                <Route path="/favorites" render={()=><h1>favoritas</h1>}/>
                <Redirect from="/" to="/movies" />
            </Switch>
        </div>
    )
}
