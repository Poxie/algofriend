import styles from '../../styles/Sorting.module.scss';
import { createContext, ReactElement, useCallback, useContext, useEffect, useState } from "react"
import { SortingDropdown } from "./SortingDropdown";
import { SortingHeader } from "./SortingHeader";
import { SortingItem } from "./SortingItem";
import { ContextType, Item } from "./types";
import { useRouter } from 'next/router';
import { SortingControls } from './SortingControls';
import { BubbleSort } from './algorithms/BubbleSort';

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
    const [items, setItems] = useState<Item[]>([]);
    const [itemAmount, setItemAmount] = useState(40);
    const [started, setStarted] = useState(false);
    const [delay, setDelay] = useState(500);
    const [width, setWidth] = useState(0);

    // Ending visualization
    const end = () => {
        setStarted(false);
    }

    // Restarting visualization
    const restart = useCallback(() => {
        setStarted(false);
        setItems(getRandomItems(itemAmount));
    }, []);

    // Resetting states on algorithm change
    useEffect(restart, [algorithmId, itemAmount])

    // Determining item width and new creating items
    useEffect(() => {
        setWidth(1000 / itemAmount);
        setItems(getRandomItems(itemAmount));
    }, [itemAmount]);

    // Determining what algorithm to use
    let algorithm = null;
    switch(algorithmId) {
        case 'bubble-sort':
            algorithm = <BubbleSort />;
    }

    const value = {
        items,
        setItems,
        itemAmount,
        setItemAmount,
        delay,
        setDelay,
        started,
        setStarted,
        end
    }
    return(
        <SortingContext.Provider value={value}>
            {algorithm}

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
            <SortingControls />
        </SortingContext.Provider>
    )
}