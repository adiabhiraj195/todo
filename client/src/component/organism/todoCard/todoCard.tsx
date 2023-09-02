import React from 'react'
import './todoCard.css';
import TaskCard from '../../molecule/cardContent/taskCard';
import AddTaskContent from '../../molecule/addCardContent/addTaskContent';
import { TasksInterface } from '../../../interface/tasks.interface';

interface TodoCardInterface {
    cardTitle: string;
    tasks: Array<TasksInterface>;
    cardId: string;
}

const TodoCard = ({
    cardTitle,
    tasks,
    cardId,
}: TodoCardInterface) => {

    return (
        <div className='todo-card'>
            <h3 className='todo-card-title'>{cardTitle}</h3>
            <div className='todo-wrap'>
                {
                    tasks?.map((task) => {
                        return (
                            <div className='task-key-container' key={task._id}>
                                <TaskCard content={task.content} status={task.status}/>
                            </div>
                        )
                    })
                }
                <AddTaskContent cardId={cardId} />
            </div>
        </div>
    )
}

export default TodoCard;