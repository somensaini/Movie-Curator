import { Link } from 'react-router-dom'

// This page should render when the user is not logged in. 
// Use the Dashboard.jsx component to render the page when the user IS logged in.

// Add a link to the Login page
const Home = () => {
    const content = (
        <>    
            <h1 className="welcome">Welcome back, (Username).</h1>

            <div className = "section--container">
                <div className = "section--title">
                        <h3>NEW ON LETTERBOXD</h3>
                </div>
                <hr></hr>
                <section>
                    <ul className ="movies--list">
                        {/* <Poster />
                        <Poster />
                        <Poster />
                        <Poster />
                        <Poster />
                        <Poster /> */}
                    </ul>
                </section>
            </div>

            <div className = "section--container">
                <div className = "section--title">
                        <h3>POPULAR ON LETTERBOXD</h3>
                </div>
                <hr></hr>
                <section>
                    {/* <ul className ="movies--list">
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
                    </ul> */}
                </section>
            </div>
        </>
    )
    return content
}
export default Home