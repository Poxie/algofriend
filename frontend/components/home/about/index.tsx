import styles from '../../../styles/Home.module.scss';
import { AboutCards } from './AboutCards';
import { AboutHeader } from './AboutHeader';

export const About = () => {
    return(
        <div className={styles['about']}>
            <AboutHeader />
            <AboutCards />
        </div>
    )
}