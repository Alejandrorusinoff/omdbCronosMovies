import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import { UserContext } from "../../../index";
import { useInput } from "../hooks/custom-hooks";
import { error } from "../hooks/logs"; 

export default () => {

  const { setUser } = useContext(UserContext);
  const history = useHistory();
  const email = useInput("email");
  const password = useInput("password");


  function handleSubmit(e){
    e.preventDefault()
    axios.post("/api/login", {
      email: email.value,
      password: password.value,
    })
    .then(res => setUser(res.data))
    .then(()=>history.push("/secret"))
    .catch(({response}) => error(response.status, response.statusText)
    )
  }

  return (
    <div className="formulario">
      <div className="centro">
        <br/>
        <br/>
        <div><h2>Iniciar Sesion</h2></div>
        <br/>
        <div>
          <form onSubmit={handleSubmit}>
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm">
              <div>
                <input aria-label="Email address" type="text" required placeholder="Email address"{...email}/>
              </div>
              <br/>
              <div>
                <input aria-label="Password" type="password" required placeholder="Password" {...password}/>
              </div>
            </div>
            <br/>
            <div className="botonLogin"><button type="submit">Ingresar</button></div>
          </form>
        </div>
      </div>
    </div>
  );
};