import React, { useState } from 'react'
import TextArea from '../../atom/textArea/teaxtArea'
import './taskEditPopup.css';
import CardService from '../../../service/card-service';
import useData from '../../../hooks/useData';

interface TaskEditInterface {
    content: string;
    status: string;
    cardId : string;
    taskId : string;
}

const TaskEditPopup = ({
    content,
    status,
    cardId,
    taskId
}: TaskEditInterface) => {
    const [editedTask, setEditedTask] = useState(content);
    const [newStatus, setNewStatus] = useState(status);
    const accessToken = localStorage.getItem('Token');
    const {getUserData} = useData();

    const updateTask = async()=>{
        if(accessToken ==null) return;

        try {
            await CardService.updateTask(accessToken, {
                editedTask,
                newStatus,
                cardId,
                taskId
            });
            getUserData();

        } catch (error) {
            console.log(error);
        }

    }

    const deleteTask = async()=>{
        if(accessToken ==null) return;
        try {
            await CardService.deleteTask(accessToken, {
                cardId,
                taskId
            });
            getUserData();

        } catch (error) {
            console.log(error);
        }
    }

    const handleTaskInpute = (value: string) => {
        setEditedTask(value);
    }
    const todoStatus = ()=>{
        setNewStatus("red");
    }
    const progressStatus = ()=>{
        setNewStatus("orange");
    }
    const doneStatus = ()=>{
        setNewStatus("green");
    }
    return (<>
        {/* <div className='edit-pop-wrap'> */}

        <div className='edited-task-wrap'>
            <TextArea
                id='edit-task-text-area'
                value={editedTask}
                onInput={handleTaskInpute}
                rows={4}
                borderColor={newStatus}
            />
            <div className='task-status-btn-wrap'>
                <button onClick={todoStatus} style={{ background: "red" }}>todo</button>
                <button onClick={progressStatus} style={{ background: "orange" }}>in progress</button>
                <button onClick={doneStatus} style={{ background: "green" }}>done</button>
            </div>
        </div>
        <div className='task-action-btn-wrap'>
            <button onClick={deleteTask} style={{ background: "rgb(161, 4, 4)", borderColor: "rgb(161, 4, 4)"}}>Delete</button>
            <button onClick={updateTask} style={{ background: "rgb(2, 102, 2)", borderColor: "rgb(2, 102, 2)"}}>Update</button>
        </div>
        {/* </div> */}
    </>
    )
}
export default TaskEditPopup;