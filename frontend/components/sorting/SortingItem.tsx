import { useEffect, useRef } from 'react';
import styles from '../../styles/Sorting.module.scss';
import { Item } from "./types"

const GAP = 3;
export const SortingItem: React.FC<Item & {
    width: number;
    delay: number;
}> = ({ width, state, value, animate, delay }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(!ref.current) return;
        if(!animate) {
            ref.current.style.transition = 'none';
            ref.current.style.transform = `none`;
            return;
        }
        
        const animateAmount = width * (animate === 'left' ? -1 : 1) + (animate === 'left' ? -GAP / 2 : GAP / 2);
        
        ref.current.style.transition = `transform ${delay}ms`;
        ref.current.style.transform = `translateX(${animateAmount}px)`;
    }, [animate]);

    const className = [
        styles['item'],
        styles[state]
    ].join(' ');
    return(
        <div 
            className={className}
            style={{
                width: `${width}px`,
                height: `${value}px`
            }}
            ref={ref}
        />
    )
}