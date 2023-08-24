import React from 'react'
import '../Profile.css'
import Poster from './Poster.jsx'

function Profile(){
    return (
        <>
            <h2>Username</h2>
            <div className="section--container">
                <div className="section--title">
                    <h3>FAVORITE FILMS</h3>
                </div>
                <hr></hr>
                <div>
                    <ul className="movies--list">
                        <Poster />
                        <Poster />
                        <Poster />
                        <Poster />
                    </ul>
                </div>
            </div>
            
            <div className="section--container">
                <div className="section--title">
                    <h3>RECENT ACTIVITY</h3>
                </div>
                <hr></hr>
                <div>
                    <ul className="movies--list">
                        <Poster />
                        <Poster />
                        <Poster />
                        <Poster />
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Profile