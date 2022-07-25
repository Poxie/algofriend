import Link from 'next/link';
import { AlgorithmItem as AlgorithmItemType } from '../../assets/algorithms/types';
import styles from '../../styles/Algorithms.module.scss';

export const AlgorithmItem: React.FC<AlgorithmItemType & {
    rowId: string;
}> = ({ rowId, id, title, content, timeComplexity }) => {
    return(
        <Link href={`/algorithms/${rowId}/${id}`} tabIndex={0}>
            <a className={styles['item']}>
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
            </a>
        </Link>
    )
}