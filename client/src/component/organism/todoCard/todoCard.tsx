import React from 'react'
import './todoCard.css';
import CardContent from '../../molecule/cardContent/cardContent';
import AddCardContent from '../../molecule/addCardContent/addCardContent';

interface TodoCardInterface {
    cardTitle: string;
}

const TodoCard = ({
    cardTitle
}: TodoCardInterface) => {
    return (
        <div className='todo-card'>
            <h3 className='todo-card-title'>{cardTitle}</h3>
            <div className='todo-wrap'>
                {/* map function */}
                <CardContent content=''/>
                <AddCardContent/>
            </div>
        </div>
    )
}

export default TodoCard;