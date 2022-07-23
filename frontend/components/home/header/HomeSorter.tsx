import { useEffect, useRef, useState } from 'react';
import styles from '../../../styles/Home.module.scss';

const ITEM_MAX_HEIGHT = 300;
const ITEM_WIDTH = 15;
const ITEM_SPACING = 0;
export const HomeSorter = () => {
    const [mouseX, setMouseX] = useState(0);
    const [itemAmount, setItemAmount] = useState(0);

    // Determining mouse position
    useEffect(() => {
        const setMousePosition = (e: MouseEvent) => {
            // without -5 it will count from the left of the mouse
            const mouseX = e.pageX - 5;
            setMouseX(mouseX);
        }

        window.addEventListener('mousemove', setMousePosition);
        return () => window.removeEventListener('mousemove', setMousePosition);
    }, []);

    // Determining item amount
    useEffect(() => {
        // Updating item amount on resize
        const updateItemAmount = () => {
            const fullWidth = window.innerWidth;
            const itemAmount = Math.floor(fullWidth / (ITEM_WIDTH + ITEM_SPACING));
            setItemAmount(itemAmount);
        }
        updateItemAmount();

        window.addEventListener('resize', updateItemAmount);
        return () => window.removeEventListener('rsize', updateItemAmount);
    }, []);

    // Creating the item array
    const items = Array.from(Array(itemAmount)).map(() => (
        <HomeSorterItem mouseX={mouseX} />
    ));
    return(
        <div className={styles['sorter']}>
            {items}
        </div>
    )
}

const HomeSorterItem: React.FC<{
    mouseX: number;
}> = ({ mouseX }) => {
    const [myX, setMyX] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    // Determining item left
    useEffect(() => {
        if(!ref.current) return;
        const myX = ref.current.getBoundingClientRect().left;
        setMyX(myX);
    }, []);

    // Determining item height
    const diff = Math.abs(mouseX - myX);
    let diffPercentage = (mouseX / diff) / 10;
    if(diffPercentage > 1) diffPercentage = 1;
    
    const height = ITEM_MAX_HEIGHT * diffPercentage;

    return(
        <div 
            style={{ height }}
            className={styles['sorter-item']}
            ref={ref}
        />
    )
}