import { Link } from 'react-router-dom'

const DashHeader = () => {
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
                </ul>
            </nav>

        </header>
    )

    return content
}
export default DashHeader

