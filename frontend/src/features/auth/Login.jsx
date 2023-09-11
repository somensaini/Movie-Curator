import './Login.css'
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

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

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let res = await fetch("http://localhost:3500/login", {
                method: "POST",
                body: JSON.stringify({
                    "username": username,
                    "password": password,
                }),       
                headers:{
                    'Content-Type': 'application/json'
                }
            }).then(function (res) {
                if (res.status === 201){
                    console.log('Login Success')
                    navigate('/dashboard')
                }else{
                    console.log(res.status)
                    console.log('An error occured during login.')
                }
            });
        } catch (err){
            console.log(err)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='login--form'>
                <h3>Login</h3>

                <div>
                    <label className='login--label'>Username</label>
                    <input
                        required onChange={usernameUpdate}
                        className='login--input'
                        type="text" 
                        value={username} 
                        placeholder="Username" 
                        id="username" 
                        name="username"/>
                </div>

                <div>
                <label className='login--label'>Password</label>
                    <input
                        required onChange={passwordUpdate}
                        className='login--input'
                        type="text" 
                        value={password} 
                        placeholder="Password" 
                        id="password" 
                        name="password"/>
                </div>

                <button className='login--button'>Log In</button>

            </form>
        </>
    )
}

export default Login