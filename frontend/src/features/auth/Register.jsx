import './Login.css'
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Register = () => {
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ email, setEmail ] = useState('')
    const navigate = useNavigate()

    const usernameUpdate=(e)=>{
        setUsername(e.target.value)
    }
    const passwordUpdate=(e)=>{
        setPassword(e.target.value)
    }
    const emailUpdate=(e)=>{
        setEmail(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let res = await fetch("http://localhost:3500/register", {
                method: "POST",
                body: JSON.stringify({
                    "username": username,
                    "password": password,
                    "email": email
                }),       
                headers:{
                    'Content-Type': 'application/json'
                }
            }).then(function (res) {
                if (res.status === 201){
                    console.log('The account was created successfully.')
                    navigate('/dashboard')
                }else{
                    console.log('An error occured during registration.')
                }
            });
        } catch (err){
            console.log(err)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='register--form'>
                <h3>Join Letterboxd</h3>

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
                    <label className='login--label'>Email</label>
                    <input 
                    required onChange={emailUpdate} 
                    value={email} 
                    className='login--input' 
                    type="email" 
                    placeholder="Email" 
                    id="email" 
                    name="email" />
                </div>

                <div>
                    <label className='login--label'>Password</label>
                    <input 
                    required onChange={passwordUpdate} 
                    value={password} 
                    className='login--input' 
                    type="password" 
                    placeholder="Password" 
                    id="password" 
                    name="password"/>
                </div>

                <button type="submit" className='login--button'>Register</button>
            </form>
        </>
    )
}

export default Register