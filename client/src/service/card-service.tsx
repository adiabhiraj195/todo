import API from "./api";

const CardService = {
    createCard: (accessToken: string, payload: {
        cTitle: string;
    }) => {
        return API.post("/card/create", payload, {
            headers: { Authorization: `Bearer ${accessToken}` }
        })
    },

    addTask: (accessToken: string, payload: {
        task: string,
        id: string
    }) => {
        return API.post("/card/task", payload, {
            headers: { Authorization: `Bearer ${accessToken}` }
        })
    }
}

export default CardService;