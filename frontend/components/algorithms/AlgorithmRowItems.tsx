import styles from '../../styles/Algorithms.module.scss';
import { AlgorithmItem as AlgorithmItemType } from "../../assets/algorithms/types"
import { AlgorithmItem } from "./AlgorithmItem";
import { useRouter } from 'next/router';

export const AlgorithmRowItems: React.FC<{
    items: AlgorithmItemType[];
    search: string;
    titleContainsSearch: boolean;
    rowId: string;
}> = ({ rowId, items, search, titleContainsSearch }) => {
    const filteredItems = items.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));
    const visibleItems = titleContainsSearch ? items : filteredItems;

    return(
        <div className={styles['items']}>
            {visibleItems.map(item => <AlgorithmItem {...item} rowId={rowId} key={item.title} />)}
        </div>
    )
}