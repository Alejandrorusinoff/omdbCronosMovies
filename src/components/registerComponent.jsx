import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import { UserContext } from "../index";
import { useInput } from "../hooks/custom-hook";
import { log, success, error } from "../hooks/logs"; 

export default () => {
    const { user } = useContext(UserContext);
    const history = useHistory();
    const name = useInput("name");
    const lastName = useInput("lastName");
    const genero = useInput("genero");
    const age = useInput("age");
    const email = useInput("email");
    const password = useInput("password");

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("/api/register", {
          name: name.value,
          lastName: lastName.value,
          genero: genero.value,
          age: age.value,
          email: email.value,
          password: password.value,
        })
        .then(()=> alert("Usuario registrado exitosamente"))
        .then(()=> history.push("/login"))
      }
  return (
    <div className="formulario">
      <div className="centro">
        <br/>
        <div><h2>Crear Usuario</h2></div>
        <br/>
        <div>
          <form onSubmit={handleSubmit} >
            <div>
              <div>
                <input aria-label="Name" type="text" required placeholder="Name" {...name}/>
              </div>
              <br />
              <div>
                <input aria-label="Last-Name" type="text" required placeholder="Last Name" {...lastName} />
              </div>
              <br />
              <div>
                <input aria-label="Genero" type="text" required placeholder="Genero"  {...genero}/>
              </div>
              <br />
              <div>
                <input aria-label="Age" type="text" required placeholder="Age" {...age}/>
              </div>
              <div>
                <br />
                <input aria-label="Email address" type="text" required placeholder="Email address" {...email}/>
              </div>
              <br/>
              <div>
                <input aria-label="Password" type="password" required placeholder="Password" {...password}/>
              </div>
            </div>
            <br/>
            <div className="botonLogin"><button type="submit">Registrarse</button></div>
          </form>
        </div>
      </div>
    </div>
  );
};