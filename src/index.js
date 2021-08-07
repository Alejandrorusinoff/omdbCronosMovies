import React, { useState, createContext }  from "react";
import {render} from "react-dom";
import "./index.css";
import App from './containers/index'
import './styles.css';
import { BrowserRouter } from 'react-router-dom';

export const UserContext = createContext();

const Root = () => {
  const[user, setUser] = useState({});

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <App/>
      </UserContext.Provider>
    </BrowserRouter>
  )
}

export default render(<Root />, document.getElementById("root"));


