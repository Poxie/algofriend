import { texts } from '../../../assets/replacement/index.json';
import { useEffect, useRef, useState } from 'react';
import styles from '../../../styles/Home.module.scss';
import { AnimatePresence, motion } from 'framer-motion';

export const ReplacementText = () => {
    const [index, setIndex] = useState(0);
    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let timeout: NodeJS.Timer;
        const interval = setInterval(() => {
            setIndex(prev => {
                if(!container.current) return prev;

                // If index is at placeholder's index, reset position
                let newIndex = prev + 1;
                if(newIndex > texts.length) {
                    newIndex = 1;
                    container.current.style.transition = 'none';
                    container.current.style.transform = `translate3d(0,0,0)`;
                };
                
                // Making sure it updates transition properties after reset of position
                timeout = setTimeout(() => {
                    if(!container.current) return;
                    container.current.style.transition = 'transform .5s';
                    container.current.style.transform = `translate3d(0, -${100 * newIndex}%, 0)`;
                }, 50);
                return newIndex;
            })
        }, 6000);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        }
    }, []);

    const item = texts[index] || texts[0];
    return(
        <div className={styles['replacement-text']}>
            <h4 className={styles['replacement-text-header']}>
                Let's say goodbye to

                <div className={styles['addon-text']}>
                    <div className={styles['addon-text-container']} ref={container}>
                        {[...texts, ...[texts[0]]].map(({ text, color }, key) => {
                            return(
                                <span style={{ color }} key={key}>
                                    {text}
                                </span>
                            )
                        })}
                    </div>
                </div>
            </h4>
            <span className={styles['replacement-subtext']}>
                ...because we are all you need
            </span>

            
            <div className={styles['replacement-text-content-container']}>
                <AnimatePresence>
                    <motion.span
                        initial={{ opacity: 0, translateY: 35 }}
                        exit={{ opacity: 0, translateY: 35 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: .4 }}
                        className={styles['replacement-text-content']}
                        key={index}
                    >
                        {item.content}
                    </motion.span>
                </AnimatePresence>
            </div>
        </div>
    )
}