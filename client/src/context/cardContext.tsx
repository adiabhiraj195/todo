import { createContext, useState, Dispatch, SetStateAction } from 'react';

interface CardContextInterface {
    createCardPopup: boolean;
    setCreateCardPopup: Dispatch<SetStateAction<boolean>>;
    cardContentPopup: boolean;
    setCardContentPopup: Dispatch<SetStateAction<boolean>>;
}

const defaultValue = {
    createCardPopup: false,
    setCreateCardPopup: () => { },
    cardContentPopup: false,
    setCardContentPopup: () => { },
}

export const CardContext = createContext<CardContextInterface>(defaultValue);

interface CardProviderInterface {
    children: JSX.Element;
}

export const CardProvider = ({ children }: CardProviderInterface) => {
    const [createCardPopup, setCreateCardPopup] = useState<boolean>(defaultValue.createCardPopup);
    const [cardContentPopup, setCardContentPopup] = useState<boolean>(defaultValue.cardContentPopup)

    return (
        <CardContext.Provider
            value={{
                createCardPopup,
                setCreateCardPopup,
                cardContentPopup,
                setCardContentPopup
            }}
        >
            {children}
        </CardContext.Provider>
    )
}