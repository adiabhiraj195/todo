import { validationResult } from "express-validator";
import userService from '../service/userService.js';

class DataController {
    fetchData = async (req, res) => {
        const err = validationResult(req);
        if (!err.isEmpty()) return res.status(400).json(err);

        const { email } = req.user;
        const user = await userService.findUserByEmail(email);

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
            user.data.push({ cTitle: cTitle });
            // user.data[length].cardId = length;
        }
        user.save();

        return res.status(200).json({
            status: "New card is created"
        });

    }
}

const dataController = new DataController();

export default dataController;