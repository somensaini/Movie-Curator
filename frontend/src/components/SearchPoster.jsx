import React from 'react' 
import { useState, useEffect } from 'react';
import axios from 'axios'

function submitFavorite() {
    console.log("test")
}

export default function SearchPoster(props) {

    const test = props.id

    function submitList() {
        //get the user data 
        
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