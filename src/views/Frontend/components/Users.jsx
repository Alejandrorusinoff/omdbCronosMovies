import React from "react";
import {Link} from 'react-router-dom'

export default ({users}) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
            <div>
                <br />
                <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                    Lista de Usuarios en en base de datos
                </h2>
              {users.map((user,i) => <div key={user.id}>Usuario {i}: <Link to={`/users/${user.id}`}>{user.email}</Link></div>)}
                
            </div>
        </div>
        </div>
    );
}
