import API from "./api";

const UserService =  {
    register: (payload: {
        name: string,
        email: string,
        password1: string,
        password2: string
    }) => {
        return API.post("/user", payload);
    },
    
    login: (payload: {
        email: String,
        password: String
    })=>{
        return API.post("/user/login", payload);
    }
}

export default UserService;