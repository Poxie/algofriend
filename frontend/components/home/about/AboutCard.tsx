import styles from '../../../styles/Home.module.scss';

export const AboutCard: React.FC<{
    title: string;
    content: string;
}> = ({ title, content }) => {
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