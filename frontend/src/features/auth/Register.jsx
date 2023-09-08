import './Login.css'

const Login = () => {
    return (
        <>
            <form className='register--form' action="/register" method="POST">
                <h3>Join Letterboxd</h3>

                <div>
                    <label className='login--label' forhtml="username">Username</label>
                    <input className='login--input' type="text" placeholder="Username" id="username" name="username"/>  
                </div>

                <div>
                    <label className='login--label' forhtml="email">Email</label>
                    <input className='login--input' type="email" placeholder="Email" id="email" name="email"/>
                </div>

                <div>
                    <label className='login--label' forhtml="password">Password</label>
                    <input className='login--input' type="password" placeholder="Password" id="password" name="password"/>
                </div>

                <button type="submit" className='login--button'>Register</button>
            </form>
        </>
    )
}

export default Login