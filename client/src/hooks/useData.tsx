import { useContext } from "react";
import CardService from "../service/card-service";
import { AuthContext } from "../context/authContext";

const useData = () => {
    const { setUserName, setIsLogedIn } = useContext(AuthContext);
    const accessToken = localStorage.getItem('Token');

    const getUserData = async () => {
        if (accessToken == null) {
            setIsLogedIn(false);
            return;
        }
        try {
            const result = await CardService.getAllData(accessToken);
            if(!result.data.isLogedin){
                return;
            }
            setUserName(result.data.name);
            setIsLogedIn(true);
        } catch (error) {
            console.log(error);
        }
    }

    return {
        getUserData,
    }
}

export default useData;