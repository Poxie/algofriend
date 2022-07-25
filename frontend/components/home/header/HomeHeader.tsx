import { useRouter } from 'next/router';
import styles from '../../../styles/Home.module.scss';
import { Button } from '../../button';
import { HomeHeaderIcons } from './HomeHeaderIcons';
import { HomeHeaderText } from "./HomeHeaderText"
import { HomeSorter } from './HomeSorter';

export const HomeHeader = () => {
    const router = useRouter();

    const goToAlgorithms = () => router.push(`/algorithms`);

    return(
        <div className={styles['header']}>
            <HomeHeaderText />
            <HomeHeaderIcons />

            <div className={styles['header-button-container']}>
                <Button 
                    className={styles['header-button']}
                    type={'tertiary'}
                    onClick={goToAlgorithms}
                >
                    Go to algorithms
                </Button>
                <Button className={styles['header-button']}>
                    Explore more
                </Button>
            </div>

            <HomeSorter />
        </div>
    )
}