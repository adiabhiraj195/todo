import { createContext, useState, Dispatch, SetStateAction } from 'react';

interface AuthContextInterface {
    accessToken: string | null;
    setAccessToken: Dispatch<SetStateAction<string | null>>;
    isLogedIn: boolean;
    setIsLogedIn: Dispatch<SetStateAction<boolean>>;
    userName: string | null;
    setUserName: Dispatch<SetStateAction<string | null>>;
}

const defaultValue = {
    accessToken: null,
    setAccessToken: () => { },
    isLogedIn: true,
    setIsLogedIn: () => { },
    userName: null,
    setUserName: () => { },
}

export const AuthContext = createContext<AuthContextInterface>(defaultValue);

interface AuthProviderInterface {
    children: JSX.Element;
}

export const AuthProvider = ({ children }: AuthProviderInterface) => {
    const [accessToken, setAccessToken] = useState<string | null>(defaultValue.accessToken);
    const [isLogedIn, setIsLogedIn] = useState<boolean>(defaultValue.isLogedIn);
    const [userName, setUserName] = useState<string | null>(defaultValue.userName);

    return (
        <AuthContext.Provider
            value={{
                accessToken,
                setAccessToken,
                isLogedIn,
                setIsLogedIn,
                userName,
                setUserName
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
