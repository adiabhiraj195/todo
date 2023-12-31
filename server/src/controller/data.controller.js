import { validationResult } from "express-validator";
import userService from '../service/userService.js';

class DataController {
    fetchData = async (req, res) => {
        const err = validationResult(req);
        if (!err.isEmpty()) return res.status(400).json(err);

        const { email } = req.user;
        const user = await userService.findUserByEmail(email);
        // console.log(user);
        return res.status(200).json(user);
    }

    createCard = async (req, res) => {
        const err = validationResult(req);
        if (!err.isEmpty()) return res.status(400).json(err);

        const { email } = req.user;
        const { cTitle } = req.body;

        const user = await userService.findUserByEmail(email);
        // const length = user.data.length();

        if (cTitle !== null && cTitle !== undefined) {
            user.cards.push({ cTitle: cTitle });
            // user.data[length].cardId = length;
        }
        user.save();

        return res.status(200).json({
            status: "New card is created"
        });

    }

    addTask = async (req, res) => {
        const err = validationResult(req);
        if (!err.isEmpty()) return res.status(400).json(err);

        const { email } = req.user;
        const { cardId, task, status } = req.body;

        // const card = await userService.findDataById(cardId);
        const user = await userService.findUserByEmail(email);

        for (let i = 0; i < user.cards.length; i++) {
            if (user.cards[i]._id == cardId) {
                user.cards[i].tasks.push({ content: task, status: status });
                // console.log(user.cards[i])
            }
        }
        user.save();
        return res.status(200).json({
            status: "ok"
        });
    }

    updateTask = async (req, res) => {
        const err = validationResult(req);
        if (!err.isEmpty()) return res.status(400).json(err);

        const { email } = req.user;
        const { cardId, taskId, editedTask, newStatus } = req.body;

        const user = await userService.findUserByEmail(email);

        for (let i = 0; i < user.cards.length; i++) {
            if (user.cards[i]._id == cardId) {
                user.cards[i].tasks.forEach(task => {
                    if (task._id == taskId) {
                        task.content = editedTask;
                        task.status = newStatus;
                    }
                });
            }
        }
        user.save();

        return res.status(200).json({
            status: "ok"
        });
    }

    deleteTask = async (req, res) => {
        const err = validationResult(req);
        if (!err.isEmpty()) return res.status(400).json(err);

        const { email } = req.user;
        const { cardId, taskId } = req.body;

        const user = await userService.findUserByEmail(email);

        for (let i = 0; i < user.cards.length; i++) {
            let card = user.cards[i];
            if (card._id == cardId) {                
                for (let i=0; i< card.tasks.length; i++){
                    let task = card.tasks[i];
                    if(task._id == taskId){
                        card.tasks.splice(i, 1);
                    }
                }
                // console.log(card);
            }
        }
        user.save();
        return res.status(200).json({
            status: "ok"
        });
    }
}

const dataController = new DataController();

export default dataController;