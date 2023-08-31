import { useContext } from 'react';
import { AuthContext } from '../context/authContext';

const useAuth = () => {
    const { 
        setAccessToken,
        setIsLogedIn,
        setUserName
    } = useContext(AuthContext);

    const login = (accessToken: string, userName: string)=>{
        setAccessToken(accessToken);
        localStorage.setItem("Token", accessToken);
        setUserName(userName);
        setIsLogedIn(true);
    }

    const destroyAuth = ()=>{

    }

    return {
        login,
        destroyAuth
    }
}

export default useAuth;