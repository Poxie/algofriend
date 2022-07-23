import { AboutCard as AboutCardType } from '../../../assets/about/types';
import styles from '../../../styles/Home.module.scss';

export const AboutCard: React.FC<AboutCardType> = ({ title, content }) => {
    return(
        <div className={styles['about-card']}>
            <p>
                {title}
            </p>
            <span>
                {content}
            </span>
        </div>
    )
}