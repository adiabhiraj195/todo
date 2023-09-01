import { createContext, useState, Dispatch, SetStateAction } from 'react';

interface AuthContextInterface {
    accessToken: string | null;
    setAccessToken: Dispatch<SetStateAction<string | null>>;
    isLogedIn: boolean;
    setIsLogedIn: Dispatch<SetStateAction<boolean>>;
    userName: string | null;
    setUserName: Dispatch<SetStateAction<string | null>>;
    toggleLogin: boolean;
    setToggleLogin: Dispatch<SetStateAction<boolean>>;
    toggleSignin: boolean;
    setToggleSignin: Dispatch<SetStateAction<boolean>>;
}

const defaultValue = {
    accessToken: null,
    setAccessToken: () => { },
    isLogedIn: false,
    setIsLogedIn: () => { },
    userName: null,
    setUserName: () => { },
    toggleLogin: false,
    setToggleLogin: () => { },
    toggleSignin: false,
    setToggleSignin: () => { }
}

export const AuthContext = createContext<AuthContextInterface>(defaultValue);

interface AuthProviderInterface {
    children: JSX.Element;
}

export const AuthProvider = ({ children }: AuthProviderInterface) => {
    const [accessToken, setAccessToken] = useState<string | null>(defaultValue.accessToken);
    const [isLogedIn, setIsLogedIn] = useState<boolean>(defaultValue.isLogedIn);
    const [userName, setUserName] = useState<string | null>(defaultValue.userName);
    const [toggleLogin, setToggleLogin] = useState<boolean>(defaultValue.toggleLogin);
    const [toggleSignin, setToggleSignin] = useState<boolean>(defaultValue.toggleSignin);

    return (
        <AuthContext.Provider
            value={{
                accessToken,
                setAccessToken,
                isLogedIn,
                setIsLogedIn,
                userName,
                setUserName,
                toggleLogin,
                setToggleLogin,
                toggleSignin,
                setToggleSignin
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
