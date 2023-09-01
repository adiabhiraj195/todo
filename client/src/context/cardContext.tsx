import { createContext, useState, Dispatch, SetStateAction } from 'react';
// interface TasksInterface {
//     content: string;
//     status: string;
//     taskId: string;
// }[];

interface CardContextInterface {
    createCardPopup: boolean;
    setCreateCardPopup: Dispatch<SetStateAction<boolean>>;
    cardContentPopup: boolean;
    setCardContentPopup: Dispatch<SetStateAction<boolean>>;
    // cards: Array<{ cardId: string; cTitle: string; tasks: TasksInterface }>;

}

const defaultValue = {
    createCardPopup: false,
    setCreateCardPopup: () => { },
    cardContentPopup: false,
    setCardContentPopup: () => { },
    // cards: []
}

export const CardContext = createContext<CardContextInterface>(defaultValue);

interface CardProviderInterface {
    children: JSX.Element;
}

export const CardProvider = ({ children }: CardProviderInterface) => {
    const [createCardPopup, setCreateCardPopup] = useState<boolean>(defaultValue.createCardPopup);
    const [cardContentPopup, setCardContentPopup] = useState<boolean>(defaultValue.cardContentPopup);
    // const [cards, setCards] = useState<Array<Object>>(defaultValue.cards)

    return (
        <CardContext.Provider
            value={{
                createCardPopup,
                setCreateCardPopup,
                cardContentPopup,
                setCardContentPopup,
            }}
        >
            {children}
        </CardContext.Provider>
    )
}