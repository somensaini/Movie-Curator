import React from 'react' 

export default function Poster(props) {
    return (
        <li>
            <img 
                src = {props.posterPath}
                width="100"
                height="150"
            />
        </li>
    )
}