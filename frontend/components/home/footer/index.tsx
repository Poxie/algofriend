import styles from '../../../styles/Home.module.scss';
import { Button } from '../../button';

export const Footer = () => {
    return(
        <div className={styles['footer']}>
            <h5>
                There is no reason to wait.
            </h5>
            <Button type={'secondary'} className={styles['footer-button']}>
                Start journey
            </Button>
        </div>
    )
}