import React from 'react'
import '../Home.css'
import Poster from './Poster.jsx'
import Stats from './Stats.jsx'

function Home() {
    return (
        <>    
            <h1 className="welcome">Welcome back, (Username).</h1>

            <div className = "section--container">
                <div className = "section--title">
                        <h3>NEW ON LETTERBOXD</h3>
                </div>
                <hr></hr>
                <section>
                    <ul className ="movies--list">
                        <Poster />
                        <Poster />
                        <Poster />
                        <Poster />
                        <Poster />
                        <Poster />
                    </ul>
                </section>
            </div>

            <div className = "section--container">
                <div className = "section--title">
                        <h3>POPULAR ON LETTERBOXD</h3>
                </div>
                <hr></hr>
                <section>
                    <ul className ="movies--list">
                        <li>
                            <Poster />
                            <Stats />
                        </li>
                        <li>
                            <Poster />
                            <Stats />
                        </li>
                        <li>
                            <Poster />
                            <Stats />
                        </li>
                        <li>
                            <Poster />
                            <Stats />
                        </li>
                        <li>
                            <Poster />
                            <Stats />
                        </li>
                        <li>
                            <Poster />
                            <Stats />
                        </li>
                    </ul>
                </section>
            </div>
        </>
    )
}

export default Home