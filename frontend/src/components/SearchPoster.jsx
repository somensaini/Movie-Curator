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
            url: 'http://localhost:3500/list',
            headers: { 
                'Content-Type': 'application/json'
        },
            data : data
        }

        axios.request(config)
        .then((res) => {
            console.log("Added to User's List")
        })
        .catch((error) => {
        console.log(error)
        })
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
            url: 'http://localhost:3500/favorite',
            headers: { 
                'Content-Type': 'application/json'
        },
            data : data
        }
        axios.request(config)
        .then((res) => {
            console.log("Added to User's Favorites")
        })
        .catch((error) => {
        console.log(error);
        })
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