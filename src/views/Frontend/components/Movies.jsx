import React from 'react';
import {Link} from 'react-router-dom'

export default function ({movies}) {
    return(
        <div className="movies">
            {movies.map((movie) => 
            <div key={movie.imdbID} >
                <Link to={`/movies/${movie.imdbID}`}><img src={movie.Poster} alt="" /></Link>
                <div><button>Añadir a favorito</button></div>
                <br />
            </div>)}
        </div>
    )
}