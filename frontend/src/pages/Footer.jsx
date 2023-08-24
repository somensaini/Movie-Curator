import React from 'react'
import '../Footer.css'

function Footer() {
    return (
      <footer className="footer">
        <nav className="footer--nav">
            <ul className="footer--links">
                <li>About</li>
                <li>Help</li>
                <li>Contact</li>
                <li>GitHub</li>
            </ul>
        </nav>
        <p className="copyright">© Letterboxd Limited. Film data from TMDb.</p>
      </footer>
  )
}

export default Footer