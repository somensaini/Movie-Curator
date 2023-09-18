import './Login.css'
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    const navigate = useNavigate()

    const usernameUpdate=(e)=>{
        setUsername(e.target.value)
    }
    const passwordUpdate=(e)=>{
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios({
            method: "POST",
            data: {
                username: username,
                password: password,
            },
            withCredentials: true,
            url: "http://localhost:3500/login",
        }).then((res) => {
            if (res.status === 200){
                navigate('/dashboard')
            }
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='login--form'>
                <h3>Login</h3>

                <div>
                    <label className='login--label'>Username</label>
                    <input
                        onChange={usernameUpdate}
                        className='login--input'
                        placeholder="Username" 
                        />
                </div>

                <div>
                <label className='login--label'>Password</label>
                    <input
                        onChange={passwordUpdate}
                        className='login--input'
                        placeholder="Password" 
                        />
                </div>

                <button className='login--button'>Log In</button>

            </form>
        </>
    )
}

export default Login