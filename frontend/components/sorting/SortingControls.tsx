import styles from '../../styles/Sorting.module.scss';
import { Button } from '../button';
import { useSorting } from './Sorting';
import { SortingRange } from './SortingRange';

export const SortingControls = () => {
    const { itemAmount, setItemAmount, delay, setDelay, started, start, stop } = useSorting();

    return(
        <div className={styles['controls']}>
            <SortingRange 
                label={'Array length'}
                min={2}
                max={50}
                onChange={amount => setItemAmount(parseInt(amount))}
                value={itemAmount}
            />

            <Button 
                type={'secondary'}
                className={styles['button']}
                onClick={started ? stop : start}
            >
                {started ? 'Stop' : 'Start'} visualization
            </Button>

            <SortingRange 
                label={'Animation delay'}
                min={20}
                max={1000}
                onChange={amount => setDelay(parseInt(amount))}
                value={delay}
            />
        </div>
    )
}