import styles from '../../styles/Algorithms.module.scss';
import { AlgorithmRow as AlgorithmRowType } from "../../assets/algorithms/types"
import { AlgorithmRowItems } from "./AlgorithmRowItems"
import { CSSProperties } from 'react';

export const AlgorithmRow: React.FC<AlgorithmRowType> = ({ title, color, colorSecondary, items }) => {
    return(
        <div 
            className={styles['row']}
            style={{ '--primary': color, '--secondary': colorSecondary } as CSSProperties}
        >
            <h2 className={styles['header']}>
                {title}
            </h2>

            <AlgorithmRowItems items={items} />
        </div>
    )
}