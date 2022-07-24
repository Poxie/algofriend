import styles from '../../styles/Algorithms.module.scss';
import { AlgorithmRow as AlgorithmRowType } from "../../assets/algorithms/types"
import { AlgorithmRowItems } from "./AlgorithmRowItems"
import { CSSProperties } from 'react';

export const AlgorithmRow: React.FC<AlgorithmRowType> = ({ id, title, items }) => {
    return(
        <div 
            className={styles['row']}
            style={{ '--primary': `var(--${id}-color-primary)`, '--secondary': `var(--${id}-color-secondary)`, '--hover': `var(--${id}-color-hover)` } as CSSProperties}
        >
            <h2 className={styles['header']}>
                {title}
            </h2>

            <AlgorithmRowItems items={items} />
        </div>
    )
}