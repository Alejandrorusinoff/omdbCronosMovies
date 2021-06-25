import React from 'react';
import {Link} from 'react-router-dom'

// export default function ({movies}) {
//     return(
//         <div>
//    {/*          <div>{movies[0].imdbID ? <img src={movies[0].Poster}/>:null}</div> */}
//             {movies.map((movie) => 
//             <div key={movie.imdbID} >
//                 <Link to={`/movies/${movie.imdbID}`}><img src={movie.Poster} alt="" /></Link>
//                 {/* <div><button>Añadir a favorito</button></div> */}
//                 <div><button>Añadir a favorito</button></div>
//                 <br />
//             </div>)}
//         </div>
//     )
// }