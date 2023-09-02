import { Link } from 'react-router-dom'

const DashFooter = () => {

    const content = (
        <footer className="footer">
            <nav className="footer--nav">
                {/* <ul className="footer--links">
                    <li>About</li>
                    <li>Help</li>
                    <li>Contact</li>
                    <li>GitHub</li>
                </ul> */}
            </nav>
            <p className="copyright">© Letterboxd Limited. Film data from TMDb.</p>
        </footer>
    )

    return content
}
export default DashFooter