import { useState, useEffect } from 'react';

// This page should render when the user is not logged in. 
// Use the Dashboard.jsx component to render the page when the user IS logged in.

// Add a link to the Login page
const Home = () => {
    const [popular, setPopular] = useState();
    const [discover, setDiscover] = useState();

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
            accept: 'application/json',
            Authorization: import.meta.env.VITE_LETTERBOXD_TOKEN
            }
        };
        
        fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
            .then(response => response.json())
            .then(res => {
                console.log(res.results)
                setPopular(res.results)
            })
            .catch(err => console.error(err));
    }, [])

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
            accept: 'application/json',
            Authorization: import.meta.env.VITE_LETTERBOXD_TOKEN
            }
        };
        
        fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
            .then(response => response.json())
            .then(res => {
                console.log(res.results)
                setDiscover(res.results)
            })
            .catch(err => console.error(err));
    }, [])

    const content = (
        <>    
            <h1 className="welcome">Welcome to Letterboxd.</h1>

            <div className = "section--container">
                <div className = "section--title">
                        <h3>NEW ON LETTERBOXD</h3>
                </div>
                <hr></hr>
                <section>
                    <ul className ="movies--list">
                        <li>
                            <img 
                                src = {discover ? `https://image.tmdb.org/t/p/original/${discover[6].poster_path}` : " "} width = "100" height = "150" 
                            />
                        </li>
                        <li>
                            <img 
                                src = {discover ? `https://image.tmdb.org/t/p/original/${discover[7].poster_path}` : " "} width = "100" height = "150" 
                            />
                        </li>
                        <li>
                            <img 
                                src = {discover ? `https://image.tmdb.org/t/p/original/${discover[8].poster_path}` : " "} width = "100" height = "150" 
                            />
                        </li>
                        <li>
                            <img 
                                src = {discover ? `https://image.tmdb.org/t/p/original/${discover[9].poster_path}` : " "} width = "100" height = "150" 
                            />
                        </li>
                        <li>
                            <img 
                                src = {discover ? `https://image.tmdb.org/t/p/original/${discover[10].poster_path}` : " "} width = "100" height = "150" 
                            />
                        </li>
                        <li>
                            <img 
                                src = {discover ? `https://image.tmdb.org/t/p/original/${discover[11].poster_path}` : " "} width = "100" height = "150" 
                            />
                        </li>
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
                            <img 
                                src = {popular ? `https://image.tmdb.org/t/p/original/${popular[0].poster_path}` : " "} width = "100" height = "150" 
                            />
                        </li>
                        <li>
                            <img 
                                src = {popular ? `https://image.tmdb.org/t/p/original/${popular[1].poster_path}` : " "} width = "100" height = "150" 
                            />
                        </li>
                        <li>
                            <img 
                                src = {popular ? `https://image.tmdb.org/t/p/original/${popular[2].poster_path}` : " "} width = "100" height = "150" 
                            />
                        </li>
                        <li>
                            <img 
                                src = {popular ? `https://image.tmdb.org/t/p/original/${popular[3].poster_path}` : " "} width = "100" height = "150" 
                            />
                        </li>
                        <li>
                            <img 
                                src = {popular ? `https://image.tmdb.org/t/p/original/${popular[4].poster_path}` : " "} width = "100" height = "150" 
                            />
                        </li>
                        <li>
                            <img 
                                src = {popular ? `https://image.tmdb.org/t/p/original/${popular[5].poster_path}` : " "} width = "100" height = "150" 
                            />
                        </li>
                    </ul>
                </section>
            </div>
        </>
    )
    return content
}
export default Home