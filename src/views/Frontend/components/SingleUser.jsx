import React, { useEffect } from 'react';

export default ({selectedUser, userId, user})=>{
    useEffect(()=>{
        selectedUser(userId)
    },[user])
    return(
        <div>
            <h5>Datos de usuario: {user.email}</h5>
            <br/>
            <h6>Email: {user.email}</h6>
            <h6>Password: {user.password}</h6>
            <br/>
            <h5>Peliculas y series favoritas</h5>
        </div>
    )
}