import React from 'react';
import {Link} from 'react-router-dom'

export default ({movies, name}) => {
    return(
        <div className="movies">
        {name ? 
            <div className="movies">
                {movies.map((movie) => 
                <div key={movie.imdbID} >
                    <Link to={`/movies/${name}/${movie.imdbID}`}><img src={movie.Poster} alt="" /></Link>
                    <div><button>Añadir a favorito</button></div>
                    <br />
                </div>)}
            </div>
        : 
            <div className="movies">
                {movies.map((movie) => 
                <div key={movie.imdbID} >
                    <Link to={`/movies/${movie.Title}/${movie.imdbID}`}><img src={movie.Poster} alt="" /></Link>
                    <div><button>Añadir a favorito</button></div>
                    <br />
                </div>)}
            </div>} 
        </div>
    )
}