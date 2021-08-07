import React, {useContext} from 'react';
import {Link, useHistory} from 'react-router-dom'
import axios from "axios";
import { UserContext } from "../index";
import { log, success, error } from "../hooks/logs"; 

export const HeaderComponent = ({handleChange, handleSubmit, name}) => {
    const { user, setUser } = useContext(UserContext);
    const history = useHistory();

    const handleLogout = async () => {
        log("logout attempt...");
        try {
          await axios.post("/api/logout");
          setUser({});
          success("logged out");
          history.push("/");
        } catch ({ response }) {
          error(response.status, response.statusText);
        }
    };
    return (
        <div>
            <br />
            <div className="row column">
                <div className="primary col-sm-3"><Link id="namePage" className="colorFuente" to="/home">CRONOS-MOVIES</Link></div>  
                <div className="primary col-sm-6">
                    <form className="input" onSubmit={handleSubmit}>
                        <input onChange={handleChange} 
                        value={name} 
                        type="text" 
                        placeholder="Buscar"/>
                    </form>
                </div>
                <div className="primary col-sm-3">
                    {user.id ? <div className="colorFuente"><button onClick={handleLogout}>Cerrar sesion</button></div>:
                    <div className="primary column2 col-sm-12">
                        <div><Link className="colorFuente" to="/register">Crear Cuenta</Link></div>
                        <div><Link className="colorFuente" to="/login">Iniciar sesion</Link></div>
                    </div>
                    }
                </div>
            </div>
            <hr />
            <div className="secundary">
                <div><Link className="colorFuente" to="/movies">Home</Link></div>
                <div><Link className="colorFuente" to="/favorites">Favoritas</Link></div>
                <div><Link className="colorFuente" to="/users">Usuarios</Link></div>
            </div>
            <br />
        </div>
    )
}
