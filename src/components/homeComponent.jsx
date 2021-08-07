import React from 'react';
import {Link} from 'react-router-dom'

export const HomeComponent = ({homes}) => {

    return(
        <div className="movies">
            {homes.map((home) => 
            <div key={home.imdbID} >
                <Link to={`/movies/${home.imdbID}`}><img src={home.Poster} alt="" /></Link>
                <div><button onClick="">Añadir a favorito</button></div>
                <br />
            </div>)}
        </div>
    )
}