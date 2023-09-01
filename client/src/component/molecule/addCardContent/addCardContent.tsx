import React, { useContext, useState } from 'react'
import './addCardContent.css';
import { CardContext } from '../../../context/cardContext';
import { AiOutlinePlus } from 'react-icons/ai';
import InputField from '../../atom/inputField';
import CardService from '../../../service/card-service';

const AddCardContent = () => {
    const { cardContentPopup, setCardContentPopup } = useContext(CardContext);
    const [task, setTask] = useState("");
    
    const handleAddTask = ()=>{
        setCardContentPopup(false)

        //add task to database with id
    }

    const handleTaskInput = (value: string) => {
        setTask(value);
    }
    const addContentPopup = () => {
        setCardContentPopup(true);
    }
    return (
        <div className='add-card-content'>
            {
                cardContentPopup ? <>
                    <div>
                        <InputField
                            placeholder=' Add Task'
                            id='add-todo-content'
                            value={task}
                            onInput={handleTaskInput}
                            type='text'
                        />
                        <div className='add-task-btn' onClick={handleAddTask}><AiOutlinePlus /></div>
                    </div>
                </> : <>
                    <div className='add-content-btn' onClick={addContentPopup}>
                        <AiOutlinePlus className='add-content-logo' />
                    </div>
                </>
            }
        </div>
    )
}

export default AddCardContent;