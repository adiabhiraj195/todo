import API from "./api";

const CardService = {
    getAllData: (accessToken: string) => {
        return API.get("/data", {
            headers: { Authorization: `Bearer ${accessToken}` }
        })
    },

    createCard: (accessToken: string, payload: {
        cTitle: string;
    }) => {
        return API.post("/data/create", payload, {
            headers: { Authorization: `Bearer ${accessToken}` }
        })
    },

    addTask: (accessToken: string, payload: {
        task: string,
        cardId: string,
        status: "red" | "orange" | "green"
    }) => {
        return API.post("/data/task", payload, {
            headers: { Authorization: `Bearer ${accessToken}` }
        })
    }
}

export default CardService;