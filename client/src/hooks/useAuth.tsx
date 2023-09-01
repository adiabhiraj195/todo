import { useContext } from 'react';
import { AuthContext } from '../context/authContext';

const useAuth = () => {
    const {
        setAccessToken,
        setIsLogedIn,
        setToggleLogin,
    } = useContext(AuthContext);

    const login = (accessToken: string) => {
        setAccessToken(accessToken);
        localStorage.setItem("Token", accessToken);
        setIsLogedIn(true);
        setToggleLogin(false);
    }

    const destroyAuth = () => {

    }

    return {
        login,
        destroyAuth
    }
}

export default useAuth;