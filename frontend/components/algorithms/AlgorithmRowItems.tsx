import styles from '../../styles/Algorithms.module.scss';
import { AlgorithmItem as AlgorithmItemType } from "../../assets/algorithms/types"
import { AlgorithmItem } from "./AlgorithmItem";

export const AlgorithmRowItems: React.FC<{
    items: AlgorithmItemType[];
}> = ({ items }) => {
    return(
        <div className={styles['items']}>
            {items.map(item => <AlgorithmItem {...item} key={item.title} />)}
        </div>
    )
}