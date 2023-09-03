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
        task: string;
        cardId: string;
        status: "red" | "orange" | "green";
    }) => {
        return API.post("/data/task", payload, {
            headers: { Authorization: `Bearer ${accessToken}` }
        })
    },

    updateTask: (accessToken: string, payload: {
        editedTask: string;
        newStatus: string;
        cardId : string;
        taskId : string;
    }) =>{  
        return API.post("/data/update", payload, {
            headers: { Authorization: `Bearer ${accessToken}` }

        })
    },

    deleteTask: (accessToken: string, payload: {
        cardId : string;
        taskId : string;
    }) =>{  
        return API.post("/data/delete", payload, {
            headers: { Authorization: `Bearer ${accessToken}` }

        })
    }
}

export default CardService;