import React from 'react' 
import axios from 'axios'

export default function SearchPoster(props) {
    const test = props.id

    // Function to run when User clicks Add to List
    function submitList() {
        
        let data = JSON.stringify({
            "username": props.username,
            "movieId": props.id
        });
        let config = {
            method: 'patch',
            maxBodyLength: Infinity,
            url: "https://movie-curator-api.onrender.com/list",
            headers: { 
                'Content-Type': 'application/json'
        },
            data : data
        }

        axios.request(config)
    }

    // Function to run when User clicks Add to Favorites
    function submitFavorite() {
        let data = JSON.stringify({
            "username": props.username,
            "movieId": props.id
        })
        let config = {
            method: 'patch',
            maxBodyLength: Infinity,
            url: "https://movie-curator-api.onrender.com/favorite",
            headers: { 
                'Content-Type': 'application/json'
        },
            data : data
        }
        axios.request(config)
    }
    
    return (
        <li className = 'search--item'>
            <img 
                className = 'search--item--image'
                src = {props.posterPath}
            />
            <h3>
                {props.title}
            </h3>
            <span>
                {props.year}
            </span>
            <p>
                {props.description}
            </p>
            <section>
                <button className='fa-solid fa-plus search--button' onClick={submitList}></button>
                <button className='fa-regular fa-star search--button' onClick={submitFavorite}></button>
            </section>
        </li>
    )
}