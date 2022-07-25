import styles from '../../styles/Algorithms.module.scss';
import { AlgorithmRow as AlgorithmRowType } from "../../assets/algorithms/types"
import { AlgorithmRowItems } from "./AlgorithmRowItems"
import { CSSProperties, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export const AlgorithmRow: React.FC<AlgorithmRowType> = ({ id, title, items }) => {
    const { search='' } = useRouter().query as { search?: string };

    // Checking if row is visible
    const query = search.toLowerCase();
    const titleContainsSearch = title.toLowerCase().includes(query);
    const itemsContainSearch = items.find(item => item.title.toLowerCase().includes(query));
    if(!titleContainsSearch && !itemsContainSearch) return null;

    return(
        <div 
            className={styles['row']}
            style={{ '--primary': `var(--${id}-color-primary)`, '--secondary': `var(--${id}-color-secondary)`, '--hover': `var(--${id}-color-hover)` } as CSSProperties}
        >
            <h2 className={styles['header']}>
                {title}
            </h2>

            <AlgorithmRowItems 
                items={items} 
                search={search}
                titleContainsSearch={titleContainsSearch}
            />
        </div>
    )
}