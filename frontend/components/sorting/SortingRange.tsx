import styles from '../../styles/Sorting.module.scss';

export const SortingRange: React.FC<{
    onChange: (value: string) => void;
    label: string;
    value: number;
    min: number;
    max: number;
}> = ({ label, onChange, value, min, max }) => {
    return(
        <div className={styles['range-container']}>
            <label htmlFor={label}>
                {label}
            </label>
            <input 
                id={label}
                value={value}
                type={'range'}
                onChange={e => onChange(e.target.value)}
                min={min}
                max={max}
            />
        </div>
    )
}