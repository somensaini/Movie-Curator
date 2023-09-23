import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

const DashHeader = () => {
    const navigate = useNavigate()
    const content = (
        <header>
            <nav className = "header--nav">
                
                {/* Link to the Dashboard */}
                <Link to="/dashboard">
                    <h1 className = "site--logo">Letterboxd</h1>
                </Link>

                <ul className = "header--nav--items">
                    {/* Link to the User's profile */}
                    <Link to="/dashboard/user">
                        <li className = "header--nav--links">PROFILE</li>
                    </Link>

                    {/* Link to the User's list */}
                    <Link to="/dashboard/list">
                        <li className = "header--nav--links">MY LIST</li>
                    </Link>

                    {/* Link to the Search page */}
                    <Link to="/dashboard/search">
                        <li className = "header--nav--links">SEARCH</li>
                    </Link>

                    {/* Make a POST request on the /logout route to log the User out and redirect to the homepage */}
                    <Link 
                        onClick = { (e) => {
                            e.preventDefault()
                            axios({
                                method: "POST",
                                withCredentials: true,
                                url: "http://localhost:3500/logout",
                            }).then((res) => {
                                if (res.status === 200){
                                    navigate('/')
                                }
                            })
                            }}>
                        <li className = "header--nav--links">LOGOUT</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
    return content
}
export default DashHeader

