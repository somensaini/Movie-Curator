import React from 'react' 

export default function SearchPoster(props) {
    return (
        <li className = 'search--item'>
            <img 
                className = 'search--item--image'
                src = {props.posterPath}
                width="100"
                height="150"
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
        </li>
    )
}