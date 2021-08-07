import React from "react";


export default ({users}) => {

    return (
        <div>
            {users.length?
            <div>
                <div className="row users-table">
                <div className="col-sm-12 table-title"><h5>Lista de Usuarios en en base de datos</h5></div>
            </div>
            <div className="row users-table">
                <div className="col-sm-1 users-table">ID</div>
                <div className="col-sm-3 users-table">Nombre</div>
                <div className="col-sm-2 users-table">Apellido</div>
                <div className="col-sm-2 users-table">Género</div>
                <div className="col-sm-1 users-table">Edad</div>
                <div className="col-sm-3 users-table">Email</div>
            </div>
            {users.map(user => 
            <div className="row">
                <div className="col-sm-1 users-table">{user.id}</div>
                <div className="col-sm-3 users-table">{user.name}</div>
                <div className="col-sm-2 users-table">{user.lastName}</div>
                <div className="col-sm-2 users-table">{user.genero}</div>
                <div className="col-sm-1 users-table">{user.age}</div>
                <div className="col-sm-3 users-table">{user.email}</div>
                <br />
            </div>
            )}  
            </div>
            :
            <div><h1>Actualmente no hay usuarios registrados</h1></div>
            }   
        </div>
    );
}
