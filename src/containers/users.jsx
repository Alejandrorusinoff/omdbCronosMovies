import React, {useEffect, useState} from "react";
import axios from 'axios'
import UsersComponent from "../components/usersComponent";

export default () => {
    const[users, setUsers] = useState([])

    useEffect(()=>{
        axios.get("/api/register")
        .then(res => res.data)     
        .then(usersServer => setUsers(usersServer))
    },[])
    console.log(users)


    return (
        <div>
            <UsersComponent users={users}/>
        </div>
    );
}
