import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

const DashHeader = () => {
    const navigate = useNavigate()
    const content = (
        <header>
            <nav className = "header--nav">
                <Link to="/dashboard">
                    <h1 className = "site--logo">Letterboxd</h1>
                </Link>

                <ul className = "header--nav--items">
                    <Link to="/dashboard/user">
                        <li className = "header--nav--links">PROFILE</li>
                    </Link>
                    <Link to="/dashboard/list">
                        <li className = "header--nav--links">MY LIST</li>
                    </Link>
                    <Link to="/dashboard/search">
                        <li className = "header--nav--links">SEARCH</li>
                    </Link>
                    <Link 
                        onClick = { (e) => {
                            e.preventDefault()
                            axios({
                                method: "POST",
                                withCredentials: true,
                                url: "http://localhost:3500/logout",
                            }).then((res) => {
                                if (res.status === 200){
                                    navigate('/');
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

