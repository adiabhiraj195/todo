import React, { useContext, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import './addCard.css';
import { CardContext } from '../../../context/cardContext';
import InputField from '../../atom/inputField';
import { RxCross1 } from 'react-icons/rx';
import CardService from '../../../service/card-service';
import useData from '../../../hooks/useData';

const AddCard = () => {
    const { createCardPopup, setCreateCardPopup } = useContext(CardContext);
    const [cTitle, setCTitle] = useState("");
    const accessToken = localStorage.getItem("Token");
    const {getUserData} = useData();

    const validateInput = ()=>{
        let isValid = true;
        if(cTitle.length === 0){
            isValid = false;
        }
        return isValid;
    }
    const handleCreateCard = async() => {
        // console.log("yf")
        if(!validateInput()) return;
        if(accessToken == null) return;
        try {
            await CardService.createCard(accessToken, {cTitle});
            getUserData(accessToken);
            setCreateCardPopup(false);

            //todo - call all cards to re render
        } catch (error) {
            console.log(error)
        }
    }

    const handleTitleInput = (value: string) => {
        setCTitle(value);
    }
    const addCreatePopup = () => {
        setCreateCardPopup(true);
    }
    const removeCreatePopup = () => {
        setCreateCardPopup(false);
    }
    return (
        <div className='add-card-container'>
            {
                createCardPopup ? <>
                    <div className='add-card-close-wrap' onClick={removeCreatePopup}>
                        <RxCross1 />
                    </div>
                    <div className='add-card-title-input-wrap'>
                        <InputField
                            id='create-card-title'
                            type='text'
                            placeholder='.....'
                            value={cTitle}
                            onInput={handleTitleInput}
                            label='Create Card Title'
                        />
                        <button className='card-create-btn' onClick={handleCreateCard}>Create</button>
                    </div>
                </>
                    :
                    <div className='add-card-btn' onClick={addCreatePopup}>
                        <AiOutlinePlus className='add-logo' />
                    </div>
            }
        </div>
    )
}

export default AddCard;