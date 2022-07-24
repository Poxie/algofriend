import { AlgorithmItem as AlgorithmItemType } from '../../assets/algorithms/types';
import styles from '../../styles/Algorithms.module.scss';

export const AlgorithmItem: React.FC<AlgorithmItemType> = ({ title, content, timeComplexity }) => {
    return(
        <div className={styles['item']}>
            <div className={styles['item-text']}>
                <p>
                    {title}
                </p>
                <span>
                    {content}
                </span>
            </div>
            <div className={styles['time-complexity']}>
                {timeComplexity}
            </div>
        </div>
    )
}