import React, { useState } from 'react'
import InputField from '../../atom/inputField';
import './addCardPopup.css';

const AddCardPopup = () => {
    const [title, setTitle] = useState("");

    return (
        <div className='popup-bg'>
            <div className='popup-wrap'>
                <InputField
                    id='login-email'
                    type='email'
                    placeholder='Email'
                    value={title}
                    onInput={setTitle}
                    label='Email'
                />
            </div>
        </div>
    )
}

export default AddCardPopup;