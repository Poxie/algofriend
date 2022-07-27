import { useEffect, useRef } from "react";
import { useSorting } from "../Sorting";
import { Item } from "../types";

const sleep = (delay: number) => new Promise(resolve => setTimeout(() => resolve({}), delay));
export const BubbleSort = () => {
    const { items, setItems, setActiveLines, setDescription, started, delay, end } = useSorting();
    const currentState = useRef(items);
    const isStarted = useRef(started);
    const currentDelay = useRef(delay);

    // Updating ref states
    useEffect(() => {
        currentState.current = items;
    }, [items]);
    useEffect(() => {
        isStarted.current = started;
    }, [started]);
    useEffect(() => {
        currentDelay.current = delay;
    }, [delay]);

    // On unmount, pause algorithm
    useEffect(() => {
        return () => {
            isStarted.current = false;
        }
    }, []);

    // Algorithm logic
    useEffect(() => {
        if(!started) return;

        // Function to sort array
        const sort = async (items: Item[]) => {
            for(let i = 0; i < items.length; i++) {
                let current = items[i];
                let next = items[i + 1];
                if(!next || next.state === 'done') {
                    current.state = 'done';
                    setItems([...items]);
                    currentState.current = [...items];
                    continue;
                };

                if(current.value > next.value) {
                    let temp = {...current};

                    // Active style
                    current.state = 'active';
                    next.state = 'active';

                    // Updating with active styles
                    setItems([...items]);
                    currentState.current = [...items];
                    setActiveLines([2]);
                    setDescription(`Checking if ${current.value} > ${next.value}, If true, swap items.`);
                    
                    // Active style before error
                    await sleep(currentDelay.current);

                    // If visualization stops, stop animation
                    if(!isStarted.current) {
                        break;
                    }
                    
                    // Setting error
                    current.state = 'error';
                    next.state = 'error';

                    // Updating with error styles
                    setItems([...items]);
                    currentState.current = [...items];

                    // Allowing error styles to be visible
                    await sleep(currentDelay.current);

                    // If visualization stops, stop animation
                    if(!isStarted.current) {
                        break;
                    }

                    // Updating indices
                    items[i] = next;
                    items[i + 1] = temp;
                    setActiveLines([3, 4, 5])
                    setDescription(`Swapping position of ${current.value} and ${next.value}.`);

                    // Removing error styles
                    current.state = 'neutral';
                    next.state = 'neutral';
                }

                // Setting current item active styles
                items[i].state = 'active';
                items[i + 1].state = 'active';

                // Setting items with active styles
                setItems([...items]);
                currentState.current = [...items];

                // Allowing styles to be visible
                await sleep(currentDelay.current);

                // If visualization stops, stop animation
                if(!isStarted.current) {
                    break;
                }

                // Removing item active styles
                items[i].state = 'neutral';
                items[i + 1].state = 'neutral';
                setActiveLines([2])
                setDescription(`Checking if ${current.value} > ${next.value}, If true, swap items.`);
            }

            // If all items are not sorted, run sort again
            if(items[0].state !== 'done' && isStarted.current) {
                sort(items);
            }
            if(items[0].state === 'done') {
                end();
            }
        }
        sort(currentState.current);
    }, [started]);

    return null;
}