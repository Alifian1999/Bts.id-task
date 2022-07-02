import React, { useState } from "react";
import baseAPI from "../API/baseAPI";

export function Register(){
    const [username,setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit =  async(e) =>{
        try {
            e.preventDefault()
            const data={
                 username: username,
                 password: password,
                 email : email
            }   


            const server = await baseAPI.post('register',data)
            console.log(server.data);
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type='email'
                placeholder="email"
                onChange={e => setEmail(e.target.value)}
                />
                <input 
                placeholder="password"
                onChange={e => setPassword(e.target.value)}
                />
                <input 
                placeholder="username"
                onChange={e => setUsername(e.target.value)}
                />
                <button>Register</button>
            </form>
        </div>
    )
}