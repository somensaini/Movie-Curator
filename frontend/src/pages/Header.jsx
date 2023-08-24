import React from 'react'
import { Link } from "react-router-dom"
import '../Header.css'

function Header() {
    return (
      <header>
        <nav className = "header--nav">
          <h1 className = "site--logo">
            <Link to="/">Letterboxd</Link>
          </h1>
          <ul className = "header--nav--items">
            <li>
              <Link to="/profile">PROFILE</Link>
            </li>
            <li>
              <Link to="/list">LIST</Link>
            </li>
            <li>
              <Link to="/search">SEARCH</Link>
            </li>
          </ul>
        </nav>
      </header>
  )
}

export default Header