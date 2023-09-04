import { useState, useEffect } from 'react';
import Poster from "./Poster"

const Home = () => {
    const [discover, setDiscover] = useState([]);
    const [popular, setPopular] = useState([]);
    
    //Fetch API for Discover
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

    //Fetch API for Popular
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

    const discoverElements = discover.slice(0, 6).map(movieElement => (
        <Poster
            posterPath = {`https://image.tmdb.org/t/p/original/${movieElement.poster_path}`}
        />
    ))

    const popularElements = popular.slice(6, 12).map(popularElement => (
        <Poster
            posterPath = {`https://image.tmdb.org/t/p/original/${popularElement.poster_path}`}
        />
    ))

    const content = (
        <>    
            <h1 className="welcome">Welcome to Letterboxd.</h1>

            <div className = "section--container--home">
                
                <div className = "section--title">
                        <h3>NEW ON LETTERBOXD</h3>
                </div>

                <hr className="section--divider"></hr>

                <div className = "movies--list--container">
                    <ul className = "movies--list--home">
                        {discoverElements}
                    </ul>
                </div>

            </div>

            <div className = "section--container--home">
                
                <div className = "section--title">
                        <h3>POPULAR ON LETTERBOXD</h3>
                </div>

                <hr className="section--divider"></hr>

                <div className = "movies--list--container">
                    <ul className = "movies--list--home">
                        {popularElements}
                    </ul>
                </div>

            </div>
        </>
    )
    return content
}
export default Home