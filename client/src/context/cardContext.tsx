import { createContext, useState, Dispatch, SetStateAction } from 'react';

interface CardContextInterface {
    createCardPopup: boolean;
    setCreateCardPopup: Dispatch<SetStateAction<boolean>>;
}

const defaultValue = {
    createCardPopup: false,
    setCreateCardPopup: ()=>{},
}

export const CardContext = createContext<CardContextInterface>(defaultValue);

interface CardProviderInterface {
    children: JSX.Element;
}

export const CardProvider = ({children}: CardProviderInterface)=>{
    const [createCardPopup, setCreateCardPopup] = useState<boolean>(defaultValue.createCardPopup)

    return (
        <CardContext.Provider
            value={{
                createCardPopup,
                setCreateCardPopup,
            }}
        >
            {children}
        </CardContext.Provider>
    )
}