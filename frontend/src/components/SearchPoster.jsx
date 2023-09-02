import React from 'react' 

export default function SearchPoster(props) {
    return (
        <li>
            <h3>
                {props.title}
            </h3>
            <img 
                src = {props.posterPath}
                width="100"
                height="150"
            />
        </li>
    )
}