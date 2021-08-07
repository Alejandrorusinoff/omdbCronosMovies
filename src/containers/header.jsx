import React from 'react';
import { HeaderComponent } from '../components/headerComponent';

export default ({handleChange, handleSubmit, name}) => {

 return(
        <div>
            <HeaderComponent handleChange={handleChange} handleSubmit={handleSubmit}name={name} />
        </div>
)}