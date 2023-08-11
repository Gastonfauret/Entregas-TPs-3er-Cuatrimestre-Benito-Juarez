import React from 'react'
import '../src/styles/Card.css'

function Card({player}) {
    return (
        <div className='card-container' id={player.id}>
            <img src={player.image} alt="Photo Player"/>
            <p>{player.number}</p>
            <p>{player.name.first} {player.name.last}</p>
            <p>{player.position}</p>
            <p>{player.team}</p>
        </div>
    )
}

export default Card