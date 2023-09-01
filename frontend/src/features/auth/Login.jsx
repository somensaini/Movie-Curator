import './Login.css'

const Login = () => {
    return (
        <body>
            <form className='login--form'>
                <h3>Login</h3>

                <label className='login--label'for="username">Username</label>
                <input className='login--input'type="text" placeholder="Username" id="username" />

                <label className='login--label' for="password">Password</label>
                <input className='login--input'type="password" placeholder="Password" id="password" />

                <button className='login--button'>Log In</button>

            </form>
        </body>
    )
}

export default Login