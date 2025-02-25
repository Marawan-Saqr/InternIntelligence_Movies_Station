import React from 'react';
import './ActorsCard.css';

const ActorsCard = ({ actor }) => {
  return (
    <div className='actor-card mb-5'>
      <div className='profile'>
        <img src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} className='img-fluid' />
      </div>
      <div className='profile-data text-center'>
        <h5>{actor.name}</h5>
        <h5>Character: {actor.character.includes("voice") ? (<span>{actor.character}</span>) : actor.character}</h5>
      </div>
    </div>
  )
}

export default ActorsCard;