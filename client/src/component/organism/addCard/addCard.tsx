import React, { useContext } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import './addCard.css';
import { CardContext } from '../../../context/cardContext';

const AddCard = () => {
    const { setCreateCardPopup } = useContext(CardContext);

    const handleAddClick = () => {
        setCreateCardPopup(true);
    }
    return (
        <div className='add-card-container'>
            <div className='add-card-btn' onClick={handleAddClick}>
                <AiOutlinePlus className='add-sign' />
            </div>
        </div>
    )
}

export default AddCard;