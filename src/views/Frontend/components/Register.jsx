import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import { UserContext } from "../../../index";
import { useInput } from "../hooks/custom-hooks";
import { log, success, error } from "../hooks/logs"; 

export default () => {
  const { user } = useContext(UserContext);
  const history = useHistory();
  const email = useInput("email");
  const password = useInput("password");

  const handleSubmit = async (e) => {
    e.preventDefault();
    log("register attempt...");
    try {
      // POST user credentials
      await axios.post("/api/register", {
        email: email.value,
        password: password.value,
      });
      success(`new user registered`);
      // Redirect to login!
      history.push("/login");
    } catch ({ response }) {
      // something's not right...
      error(response.status, response.statusText);
    }
  }; 

  return (
    <div className="formulario">
      <div className="centro">
        <br/>
        <br/>
        <div><h2>Crear Usuario</h2></div>
        <br/>
        <div>
          <form onSubmit={handleSubmit} >
            <div>
              <div>
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
