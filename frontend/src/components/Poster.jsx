import React from 'react' 

export default function Poster(props) {
    return (
        <li>
            <img 
                className = "posters"
                src = {props.posterPath}
            />
        </li>
    )
}