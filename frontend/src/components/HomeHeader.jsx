import { Link } from 'react-router-dom'

const HomeHeader = () => {
    const content = (
        <header>
            <nav className = "header--nav">
                
                {/* Link to the Home page */}
                <Link to="/">
                    <h1 className = "site--logo">Letterboxd</h1>
                </Link>

                <ul className = "header--nav--items">
                    {/* Link to the Registration Page */}
                    <Link to="/register">
                        <li className = "header--nav--links">REGISTER</li>
                    </Link>
                    {/* Link to the Login page */}
                    <Link to="/login">
                        <li className = "header--nav--links">LOGIN</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
    return content
}
export default HomeHeader

