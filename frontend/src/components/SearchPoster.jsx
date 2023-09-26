import React from 'react' 
import { useState, useEffect } from 'react';
import axios from 'axios'


export default function SearchPoster(props) {

    const test = props.id

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
        };

        axios.request(config)
        .then((response) => {
            console.log('success')
        })
        .catch((error) => {
        console.log(error);
        });

    }

    function submitFavorite() {
        let data = JSON.stringify({
            "username": props.username,
            "movieId": props.id
        });

        let config = {
            method: 'patch',
            maxBodyLength: Infinity,
            url: 'http://localhost:3500/favorite',
            headers: { 
                'Content-Type': 'application/json'
        },
            data : data
        };

        axios.request(config)
        .then((response) => {
            console.log('success')
        })
        .catch((error) => {
        console.log(error);
        });
        
        
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
            <p>
                {props.id}
            </p>
            <section>
                <button onClick={submitList}>Add to list</button>
                <button onClick={submitFavorite}>Add to favorites</button>
            </section>
        </li>
    )
}