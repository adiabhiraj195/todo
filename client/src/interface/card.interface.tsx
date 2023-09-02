import { TasksInterface } from "./tasks.interface";

export interface CardInterface {
    _id: string;
    cTitle: string;
    tasks: Array<TasksInterface>
}