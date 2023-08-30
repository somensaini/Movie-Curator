import { useState, useEffect } from 'react';

const Search = () => {
    const [results, setResults] = useState()
    const [data, setData] = useState('')
    
    let query

    useEffect(() => {
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
    }, [results])
    
    
    function submitSearch (e){
        e.preventDefault();
        query = document.getElementById('searchTerm').value
        setResults(query)
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
                <h3 className="movie--title">
                    {data ? data[0].title : "Results will display here"}
                </h3>
                <img 
                    className="movie--image"
                    src = {data ? `https://image.tmdb.org/t/p/original/${data[0].poster_path}` : '' }
                    width="100"
                    height="150"
                />
            </div>
        </>
        )
    return content
}
export default Search