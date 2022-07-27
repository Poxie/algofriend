import styles from '../../styles/Sorting.module.scss';

const items = [
    { title: 'Finished', color: 'lime' },
    { title: 'Correct order', color: 'lightblue' },
    { title: 'Incorrect order', color: 'red' },
    { title: 'Neutral', color: 'var(--color-secondary)' }
]
export const SortingHeader = () => {
    return(
        <div className={styles['header']}>
            {items.map(item => (
                <div className={styles['header-item']}>
                    <div 
                        style={{ backgroundColor: item.color }}
                        className={styles['header-color']}
                    />
                    
                    <span>
                        {item.title}
                    </span>
                </div>
            ))}
        </div>
    )
}