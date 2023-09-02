import { createContext, useState, Dispatch, SetStateAction } from 'react';
import { CardInterface } from '../interface/card.interface';

interface CardContextInterface {
    createCardPopup: boolean;
    setCreateCardPopup: Dispatch<SetStateAction<boolean>>;
    cardContentPopup: boolean;
    setCardContentPopup: Dispatch<SetStateAction<boolean>>;
    cards: Array<CardInterface>;
    setCards: Dispatch<SetStateAction<CardInterface[]>>;

}

const defaultValue = {
    createCardPopup: false,
    setCreateCardPopup: () => { },
    cardContentPopup: false,
    setCardContentPopup: () => { },
    cards: [],
    setCards: ()=>{}
}

export const CardContext = createContext<CardContextInterface>(defaultValue);

interface CardProviderInterface {
    children: JSX.Element;
}

export const CardProvider = ({ children }: CardProviderInterface) => {
    const [createCardPopup, setCreateCardPopup] = useState<boolean>(defaultValue.createCardPopup);
    const [cardContentPopup, setCardContentPopup] = useState<boolean>(defaultValue.cardContentPopup);
    const [cards, setCards] = useState<Array<CardInterface>>(defaultValue.cards)

    return (
        <CardContext.Provider
            value={{
                createCardPopup,
                setCreateCardPopup,
                cardContentPopup,
                setCardContentPopup,
                cards,
                setCards
            }}
        >
            {children}
        </CardContext.Provider>
    )
}