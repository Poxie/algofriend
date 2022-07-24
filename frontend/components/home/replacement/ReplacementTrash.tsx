import { TrashIcon } from '../../../assets/icons/TrashIcon';
import { trash } from '../../../assets/replacement/index.json';
import styles from '../../../styles/Home.module.scss';

export const ReplacementTrash = () => {
    return(
        <div className={styles['replacement-container']}>
            <div className={styles['replacement-icon']}>
                <TrashIcon />
            </div>

            <div className={styles['replacement-items']}>
                {trash.map((row, rowKey) => (
                    <div
                        className={styles['replacement-row']} 
                        key={rowKey}
                    >
                        {row.map((item, key) => (
                            <span 
                                style={{ animationDelay: `${key * 5000 + (rowKey % 2 == 0 ? 2 : 5) * 400}ms` }}
                                className={styles['replacement-item']} 
                                key={item}
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}