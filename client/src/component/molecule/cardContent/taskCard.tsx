import React, { useState } from 'react'
import './taskCard.css';
import TaskEditPopup from '../taskEditPopup/taskEditPopup';
import { RxCross1 } from 'react-icons/rx';

interface CardContentInterface {
  content: string;
  status: string;
  cardId: string;
  taskId: string;
}

const TaskCard = ({
  content,
  status,
  cardId,
  taskId
}: CardContentInterface) => {
  const [popEditTask, setPopEditTask] = useState(false);
  const [popEditBGClass, setPopEditBGClass] = useState("");

  const handlePopEditClasses = () => {
    setPopEditTask(true);
    setPopEditBGClass("pop-edit-task-bg");
  }
  const closePopup = () => {
    setPopEditTask(false);
    // console.log(popEditTask)
    setPopEditBGClass("");
  }
  return (
    <div className={popEditBGClass}>
      {popEditTask ?
        <div className='pop-card-content' style={{ border: `2px solid ${status}` }}>
          <div className='edit-popup-close-btn' onClick={closePopup}>
            <RxCross1 />
          </div>
          <div className='popup-edit-elements'>
            <TaskEditPopup content={content} status={status} cardId={cardId} taskId={taskId}/>
          </div>
        </div>
        :
        <div className="card-content" style={{ border: `2px solid ${status}` }} onClick={handlePopEditClasses}>
          <p>{content}</p>
          {/* {popEditTask && <TaskEditPopup closeEdit={closePopup}/>} */}
        </div>
      }
    </div>
  )
}

export default TaskCard;