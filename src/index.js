import React, { useState, createContext }  from "react";
import {render} from "react-dom";
import "./index.css";
import App from './views/Frontend/containers/index'
import './styles.css';
import { BrowserRouter, Route } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './views/Frontend/store/store'
import ReactDOM from 'react-dom';


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


