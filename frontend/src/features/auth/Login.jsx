import './Login.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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

    const data = {
        username: username,
        password: password,
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch("https://movie-curator-api.onrender.com/login", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json',
                },
                body: JSON.stringify(data)
            })
            
        if (response.status === 200) {
            // Session establishment was successful
            const responseData = await response.json();
      
            // Store session data, if available, in a client-side session storage
            if (responseData.user) {
              sessionStorage.setItem('user', JSON.stringify(responseData.user));
            }
      
            // Redirect to the dashboard or desired page
            navigate('/dashboard');
          } else {
            // Handle login failure, e.g., show an error message
            console.error('Login failed');
          }
        } catch (error) {
          console.error('Error logging in:', error);
        }
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
                        type='password'
                        />
                </div>

                <button className='login--button'>Log In</button>

            </form>
        </>
    )
}

export default Login