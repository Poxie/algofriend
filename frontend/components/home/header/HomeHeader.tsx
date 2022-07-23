import styles from '../../../styles/Home.module.scss';
import { HomeHeaderIcons } from './HomeHeaderIcons';
import { HomeHeaderText } from "./HomeHeaderText"

export const HomeHeader = () => {
    return(
        <div className={styles['header']}>
            <HomeHeaderText />
            <HomeHeaderIcons />
        </div>
    )
}