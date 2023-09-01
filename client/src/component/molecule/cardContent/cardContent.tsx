import React from 'react'
import './cardContent.css';

interface CardContentInterface {
    content: string;
}

const CardContent  = ({content}: CardContentInterface) => {
  return (
    <div className='card-content'>
        <p>{content}Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, assumenda.</p>
    </div>
  )
}

export default CardContent;