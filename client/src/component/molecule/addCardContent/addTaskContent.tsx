import React, { useState } from 'react'
import './addTaskContent.css';
import { AiOutlinePlus } from 'react-icons/ai';
import InputField from '../../atom/inputField';
import CardService from '../../../service/card-service';
import useData from '../../../hooks/useData';

interface TaskContentInterface {
    cardId: string
}

const AddTaskContent = ({
    cardId
}: TaskContentInterface) => {
    const [cardContentPopup, setCardContentPopup ] = useState(false);
    const [task, setTask] = useState("");
    const { getUserData } = useData();
    const status = "red";
    
    const accessToken = localStorage.getItem("Token");

    const handleAddTask = async () => {
        if (accessToken == null) {
            console.log("null accessToken");
            return;
        }
        if(task === "") return;
        try {
            await CardService.addTask(accessToken, { task, cardId, status });
            getUserData( accessToken );
            setCardContentPopup(false);
            setTask("");

        } catch (error) {
            setTask("Something is not working properly" )
            console.log(error);
        }
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

export default AddTaskContent;