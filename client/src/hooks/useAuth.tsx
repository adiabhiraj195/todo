import { useContext } from 'react';
import { AuthContext } from '../context/authContext';
import { CardContext } from '../context/cardContext';
import useData from './useData';

const useAuth = () => {
    const {
        setAccessToken,
        setIsLogedIn,
        setToggleLogin,
    } = useContext(AuthContext);

    const { setCards } = useContext(CardContext);
    const { getUserData } = useData()

    const login = async (accessToken: string) => {
        setAccessToken(accessToken);
        localStorage.setItem("Token", accessToken);
        setIsLogedIn(true);
        setToggleLogin(false);
        await getUserData(accessToken);
    }

    const destroyAuth = () => {
        setCards([]);
        setAccessToken(null);
        localStorage.clear();
        setIsLogedIn(false);
        setToggleLogin(true);
    }

    return {
        login,
        destroyAuth,
    }
}

export default useAuth;