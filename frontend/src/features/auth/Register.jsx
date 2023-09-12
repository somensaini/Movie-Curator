import './Login.css'
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

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

    const handleSubmit = (e) => {
        e.preventDefault()
        axios({
            method: "POST",
            data: {
                username: username,
                password: password,
                email: email
            },
            withCredentials: true,
            url: "http://localhost:3500/register",
        }).then((res) => console.log(res))
        // e.preventDefault()
        // try {
        //     let res = await fetch("http://localhost:3500/register", {
        //         method: "POST",
        //         body: JSON.stringify({
        //             "username": username,
        //             "password": password,
        //             "email": email
        //         }),       
        //         headers:{
        //             'Content-Type': 'application/json'
        //         }
        //     }).then((res) => {
        //         if (res.status === 201){
        //             console.log('The account was created successfully.')
        //             navigate('/dashboard')
        //         }else{
        //             console.log('An error occured during registration.')
        //         }
        //     });
        // } catch (err){
        //     console.log(err)
        // }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='register--form'>
                <h3>Join Letterboxd</h3>

                <div>
                    <label className='login--label'>Username</label>
                    <input 
                    onChange={usernameUpdate} 
                    className='login--input' 
                    placeholder="Username" 
                    />  
                </div>

                <div>
                    <label className='login--label'>Email</label>
                    <input 
                    onChange={emailUpdate} 
                    className='login--input' 
                    placeholder="Email" 
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

                <button type="submit" className='login--button'>Register</button>
            </form>
        </>
    )
}

export default Register