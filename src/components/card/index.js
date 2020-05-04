import React from 'react';

const Card = ({ name, image }) => {
  return (
    <div className='card'>
      <img src={image} alt={`${name} flag`} className='card__image' />
      <div className='card__body'>
        <div className='card__body__title'>
          <h2>{name}</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
