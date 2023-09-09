import './Login.css'
import React, { useState } from 'react'

const Register = () => {
    const [ username, setUsername ] = useState()
    const [ password, setPassword ] = useState()
    const [ email, setEmail ] = useState()

    const usernameUpdate=(e)=>{
        setUsername(e.target.value)
    }
    const passwordUpdate=(e)=>{
        setPassword(e.target.value)
    }
    const emailUpdate=(e)=>{
        setEmail(e.target.value)
    }

    const handleSubmit=(e)=> {
        e.preventDefault()
        const postURL = "http://localhost:3500/register"
        fetch(postURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password,
                email: email
            })
        })
        .then(()=> {
            console.log("Added")
        })
    }
    return (
        <>
            <form onSubmit={handleSubmit} className='register--form'>
            {/* <form className='register--form' action="/register" method="POST"> */}
                <h3>Join Letterboxd</h3>

                <div>
                    <label className='login--label'>Username</label>
                    {/* <input className='login--input' type="text" placeholder="Username" id="username" name="username"/>   */}
                    <input required onChange={usernameUpdate} 
                    className='login--input' type="text" placeholder="Username" id="username" name="username"/>  
                </div>

                <div>
                    <label className='login--label'>Email</label>
                    <input required onChange={passwordUpdate} className='login--input' type="email" placeholder="Email" id="email" name="email"/>
                </div>

                <div>
                    <label className='login--label'>Password</label>
                    <input required onChange={emailUpdate} className='login--input' type="password" placeholder="Password" id="password" name="password"/>
                </div>

                <button type="submit" className='login--button'>Register</button>
            </form>
        </>
    )
}

export default Register