import styles from '../../../styles/Home.module.scss';

export const AboutHeader = () => {
    return(
        <div className={styles['about-header']}>
            <h3>
                What is {process.env.NEXT_PUBLIC_WEBSITE_NAME}?
            </h3>
            <span>
                Short answer: It's all you need to learn algorithms.
            </span>
        </div>
    )
}