import styles from '../../styles/Sorting.module.scss';
import { createContext, ReactElement, useCallback, useContext, useEffect, useState } from "react"
import { SortingDropdown } from "./SortingDropdown";
import { SortingHeader } from "./SortingHeader";
import { SortingItem } from "./SortingItem";
import { ContextType, Item } from "./types";
import { useRouter } from 'next/router';

const SortingContext = createContext({} as ContextType);

export const useSorting = () => useContext(SortingContext);

// Getting random items
const MAX_HEIGHT = 500;
const getRandomItems = (count: number) => {
    const items: Item[] = [];
    for(let i = 0; i < count; i++) {
        const number = Math.floor(Math.random() * MAX_HEIGHT);
        items.push({
            value: number,
            state: 'neutral'
        })
    }
    return items;
}
export const Sorting = () => {
    const { algorithmId } = useRouter().query as { algorithmId: string };
    const [items, setItems] = useState<Item[]>(getRandomItems(40));
    const [itemAmount, setItemAmount] = useState(40);
    const [started, setStarted] = useState(false);
    const [delay, setDelay] = useState(0);
    const [width, setWidth] = useState(0);

    // Restarting visualization
    const restart = useCallback(() => {
        setStarted(false);
        setItemAmount(40);
        setItems(getRandomItems(40));
    }, []);

    // Resetting states on algorithm change
    useEffect(restart, [algorithmId])

    // Determining item width
    useEffect(() => {
        setWidth(1000 / itemAmount);
    }, [itemAmount]);

    const value = {
        setItems,
        setItemAmount,
        setDelay
    }
    return(
        <SortingContext.Provider value={value}>
            <SortingHeader />
            
            <div className={styles['items']}>
                {items.map((item, key) => (
                    <SortingItem 
                        {...item}
                        width={width}
                        key={key}
                    />
                ))}
            </div>

            <SortingDropdown />
        </SortingContext.Provider>
    )
}