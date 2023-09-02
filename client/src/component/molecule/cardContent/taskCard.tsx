import React, { useState } from 'react'
import './taskCard.css';

interface CardContentInterface {
  content: string;
  status: string;
}

const TaskCard = ({
  content,
  status
}: CardContentInterface) => {
  return (
    <div className='card-content' style={{ border: `2px solid ${status}` }}>
      <p>{content}</p>
    </div>
  )
}

export default TaskCard;