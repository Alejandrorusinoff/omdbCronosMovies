import React, {useEffect} from 'react';

export default ({selectedMovie, movieId, movie, name})=>{
    useEffect(()=>{
        selectedMovie(movieId)
    },[])
return(
    <div className="singleMovie">
        <div>
        <h4>{movie.Title}</h4>
        <div><img src={movie.Poster} alt="" /></div>
        <br/>
        <h6>Type: {movie.Type}</h6>
        <h6>Actors: {movie.Actors}</h6>
        <h6>Director: {movie.Director}</h6>
        <h6>Writer: {movie.Writer}</h6>
        </div>
    </div>
)}