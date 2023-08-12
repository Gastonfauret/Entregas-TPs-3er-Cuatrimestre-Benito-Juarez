import React from 'react'
import '../src/styles/Card.css'

function Card({ player }) {
    return (
        <div className='card-container' id={player.id}>
            <img src={player.image} alt="Photo Player" />           

            <div className='text-container'>
            <div className="number-container">
                <p className='number'>{player.number}</p>
            </div>
                <div className="text">
                    <p className='name-lastname'>{player.name.first} {player.name.last}</p>
                    <p className='position'>{player.position}</p>
                    <p className='team'>{player.team}</p>
                </div>
            </div>


        </div>
    )
}

export default Card