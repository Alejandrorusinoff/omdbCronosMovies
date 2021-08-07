import React from 'react';
import MoviesComponents from '../components/moviesComponent';

export default ({movies, name}) => {
    return(
        <div>
            <MoviesComponents movies={movies} name={name}/>
        </div>
    )
}