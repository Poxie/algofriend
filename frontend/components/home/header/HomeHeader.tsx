import styles from '../../../styles/Home.module.scss';
import { Button } from '../../button';
import { HomeHeaderIcons } from './HomeHeaderIcons';
import { HomeHeaderText } from "./HomeHeaderText"
import { HomeSorter } from './HomeSorter';

export const HomeHeader = () => {
    return(
        <div className={styles['header']}>
            <HomeHeaderText />
            <HomeHeaderIcons />
            <Button className={styles['header-button']}>
                Explore more
            </Button>

            <HomeSorter />
        </div>
    )
}