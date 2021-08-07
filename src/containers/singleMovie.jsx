import React from 'react';
import SingleMovieComponent from '../components/singleMovieComponent';

export default ({selectedMovie, movieId, movie, name})=>{


return(
    <div className="singleMovie">
        <SingleMovieComponent selectedMovie={selectedMovie} movieId={movieId} movie={movie} name={name}/>
    </div>
)}