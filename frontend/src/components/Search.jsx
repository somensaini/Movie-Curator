import { useState, useEffect } from 'react';
import SearchPoster from './SearchPoster';

const Search = () => {
    const [results, setResults] = useState(null)
    const [data, setData] = useState('')
    const [searchState, setSearchState] = useState(false)

    let query, searchElements

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
                    console.log(res.results)
                    setData(res.results)
                })
                .catch(err => console.error(err));
        }
    }, [results])
    
    if (searchState === true && data != ''){
        searchElements = data.slice(0, 10).map(searchElement => (
            <SearchPoster
                title = {searchElement.title}
                posterPath = {`https://image.tmdb.org/t/p/original/${searchElement.poster_path}`}
            />
        ))
    }    

    function submitSearch (e){
        e.preventDefault();
        query = document.getElementById('searchTerm').value
        setResults(query)
        setSearchState(true)
    }

    const content = (
        <>
            <h2>Search</h2>
            <form>
                <label>Enter in your search term</label>
                <input type="text" id="searchTerm"/>
                <button id="searchButton" onClick={submitSearch}>Submit</button>
            </form>

            <div>
                <ul className = 'search--list'>
                    {searchElements}
                </ul>
            </div>
        </>
        )
    return content
}
export default Search