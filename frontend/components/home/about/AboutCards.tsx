import { cards } from '../../../assets/about/index.json';
import styles from '../../../styles/Home.module.scss';
import { AboutCard } from './AboutCard';

export const AboutCards = () => {
    return(
        <div className={styles['about-cards']}>
            {cards.map(card => <AboutCard {...card} key={card.title} />)}
        </div>
    )
}