import styles from '../../styles/Sorting.module.scss';
import { createContext, ReactElement, useCallback, useContext, useEffect, useState } from "react"
import { SortingDropdown } from "./SortingDropdown";
import { SortingHeader } from "./SortingHeader";
import { SortingItem } from "./SortingItem";
import { ContextType, Item } from "./types";
import { useRouter } from 'next/router';
import { SortingControls } from './SortingControls';
import { BubbleSort } from './algorithms/BubbleSort';
import { SortingCode } from './SortingCode';
import { getItemById } from '../../assets/algorithms/logic';
import { AlgorithmCategories } from '../../assets/algorithms/types';

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
            state: 'neutral',
            animate: null
        })
    }
    return items;
}
export const Sorting = () => {
    const { algorithmId, algorithmCategory } = useRouter().query as { algorithmId: string, algorithmCategory: AlgorithmCategories };
    const algorithmData = getItemById(algorithmCategory, algorithmId);
    const [items, setItems] = useState<Item[]>([]);
    const [itemAmount, setItemAmount] = useState(40);
    const [started, setStarted] = useState(false);
    const [finished, setFinished] = useState(false);
    const [delay, setDelay] = useState(500);
    const [width, setWidth] = useState(0);
    const [activeLines, setActiveLines] = useState<number[]>([]);
    const [description, setDescription] = useState(`${algorithmData?.title}`);

    // Finishing visualization
    const end = () => {
        setStarted(false);
        setFinished(true);
        setActiveLines([]);
        setDescription(`${algorithmData?.title} finished`)
    }
    // Starting visualization
    const start = () => {
        if(finished) setItems(getRandomItems(itemAmount));
        setStarted(true);
        setFinished(false);
    }
    // Stopping visualization
    const stop = () => {
        setStarted(false);
    }

    // Restarting visualization
    const restart = useCallback(() => {
        setStarted(false);
        setFinished(false);
        setActiveLines([]);
        setDescription(`${algorithmData?.title}`)
        setItems(getRandomItems(itemAmount));
        setWidth(1000 / itemAmount);
    }, [itemAmount]);

    // Resetting states on algorithm change
    useEffect(restart, [algorithmId, itemAmount])

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
        setActiveLines,
        setDescription,
        started,
        end,
        start,
        stop
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
                        delay={delay}
                        key={key}
                    />
                ))}
            </div>

            <SortingDropdown />
            <SortingControls />
            <SortingCode 
                activeLines={activeLines}
                description={description}
            />
        </SortingContext.Provider>
    )
}