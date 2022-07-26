import styles from '../../styles/Sorting.module.scss';
import { Item } from "./types"

export const SortingItem: React.FC<Item & {
    width: number;
}> = ({ width, state, value }) => {
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
        />
    )
}