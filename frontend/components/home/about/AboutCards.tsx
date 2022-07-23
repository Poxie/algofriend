import styles from '../../../styles/Home.module.scss';
import { AboutCard } from './AboutCard';

const cards = [
    { title: 'Algorithm visualizer', content: 'All of our algorithms have the ability to virtualize the algorithmic process for increased understanding.' },
    { title: 'Your own sandbox', content: 'You can attempt to create these algorithms by yourself in your own sandbox right here on the site!' },
    { title: 'Video explanations', content: 'If you don’t understand, don’t worry! We have videos for all of our algorithms with well explained examples. ' },
    { title: 'View time-complexity', content: 'You can view the time it takes for an algorithm to finish, both in our visualizer and in your sandbox.' },
    { title: 'Never get stuck', content: 'Just view one of our many explainations if you get stuck. Either video or text format.' },
    { title: 'Much more to come!', content: 'If your preferred algorithm is not here yet, just stayed tuned! We are always working on expanding.' }
]
export const AboutCards = () => {
    return(
        <div className={styles['about-cards']}>
            {cards.map(card => <AboutCard {...card} key={card.title} />)}
        </div>
    )
}