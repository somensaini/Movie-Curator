import './Login.css'

const Login = () => {
    return (
        <body>
            <form className='register--form'>
                <h3>Join Letterboxd</h3>

                <label className='login--label'for="username">Username</label>
                <input className='login--input'type="text" placeholder="Username" id="username" />

                <label className='login--label' for="password">Email</label>
                <input className='login--input'type="password" placeholder="Email" id="email" />

                <label className='login--label' for="password">Password</label>
                <input className='login--input'type="password" placeholder="Password" id="password" />

                <button className='login--button'>Register</button>

            </form>
        </body>
    )
}

export default Login