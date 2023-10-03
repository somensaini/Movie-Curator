import { useState, useEffect } from 'react'
import SearchPoster from './SearchPoster'
import axios from 'axios'

const Search = () => {
    const [results, setResults] = useState(null)
    const [data, setData] = useState('')
    const [searchState, setSearchState] = useState(false)
    const [username, setUsername] = useState(null)

    let query, searchElements

    //Get the username
    useEffect(() => {
        axios({
            method: "GET",
            withCredentials: true,
            url: "https://movie-curator-api.onrender.com/dashboard"
        }).then((res) => {
            setUsername(res.data.username)
        }).catch((err) => {
            console.log(err)
        })
        }, [])
    
    //Get the movie data from the TMDB API and store it in data
    useEffect(() => {
        if (results !== null){
            const options = {
                method: 'GET',
                headers: {
                  accept: 'application/json',
                  Authorization: import.meta.env.VITE_LETTERBOXD_TOKEN
                }
              };
              
              fetch(`https://api.themoviedb.org/3/search/movie?query=${results}&include_adult=false&language=en-US&page=1`, options)
                .then(response => response.json())
                .then(res => {
                    setData(res.results)
                })
                .catch(err => console.error(err))
        }
    }, [results])
    
    // If a search has been completed and the results are not empty, generate a SearchPoster component for each movie
    if (searchState === true && data != ''){
        searchElements = data.slice(0, 10).map(searchElement => (
            <SearchPoster
                title = {searchElement.title}
                posterPath = {`https://image.tmdb.org/t/p/original/${searchElement.poster_path}`}
                year = {searchElement.release_date.split('-')[0]}
                description = {searchElement.overview}
                id = {searchElement.id}
                username = {username}
            />
        ))
    }
    
    // Function to run when the search is submitted
    function submitSearch (e){
        e.preventDefault()
        query = document.getElementById('search--input').value
        setResults(query)
        setSearchState(true)
    }

    const content = (
        <div className = "search--container">

            <form className = "search--form">
                <label>Search for a movie</label>
                    <input type="text" id="search--input"/>
                    <button id="search--button" onClick={submitSearch}>Submit</button>
            </form>

            <div>
                <ul className = 'search--list'>
                    {searchElements}
                </ul>
            </div>
        </div>
        )
    return content
}
export default Search