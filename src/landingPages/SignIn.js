import axios from "axios";
import React, { useState, useContext } from "react";
import baseAPI from "../API/baseAPI";

export function SignIn(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState('')
    const [allCheckList, setAllCheckList] = useState(false)

    const handleSubmit = async(e) => {
        e.preventDefault()
        const datas={
            password : password,
            username : username
        }
        try {
            const server = await baseAPI.post(`login`,datas)
            const tokens = server.data
            console.log(server);
            setToken(tokens.data.token)

        } catch (error) {
            console.log(error);
        }
    }

    const handleAllCheckList = async() =>{
        try {
            const server = await baseAPI.get('checklist',{
                headers:{
                    Autorization:token,
                },
                withCredentials:false
            })
            console.log(server);
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                placeholder="password"
                name="password"
                onChange={e => setPassword(e.target.value)}
                />
                <input 
                placeholder="username"
                name="username"
                onChange={e => setUsername(e.target.value)}
                />
                <button>SignIn</button>
            </form>
            <div>
                <button onClick={()=> handleAllCheckList()}>click</button>
                {allCheckList?
                <div></div>
                :null}
            </div>
        </div>
    )
}