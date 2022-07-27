import styles from '../../styles/Sorting.module.scss';
import { useRouter } from "next/router"
import { getItemById } from "../../assets/algorithms/logic";
import { AlgorithmCategories } from "../../assets/algorithms/types";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowIcon } from '../../assets/icons/ArrowIcon';

export const SortingCode: React.FC<{
    activeLines: number[];
    description: string;
}> = ({ activeLines, description }) => {
    const { algorithmId, algorithmCategory } = useRouter().query as { algorithmId: string, algorithmCategory: AlgorithmCategories };
    const algorithm = getItemById(algorithmCategory, algorithmId);
    const [expanded, setExpanded] = useState(true);

    return(
        <pre className={styles['code']}>
            <div 
                className={styles['code-header']}
                onClick={() => setExpanded(!expanded)}
            >
                {description}

                <motion.div
                    animate={{ 
                        rotate: expanded ? '180deg' : 0,
                        translateY: expanded ? 0 : 2
                    }}
                >
                    <ArrowIcon />
                </motion.div>
            </div>

            <motion.div 
                className={styles['code-lines']}
                initial={{
                    maxHeight: expanded ? 200 : 0,
                    paddingTop: expanded ? 8 : 0
                }}
                animate={{ 
                    maxHeight: expanded ? 200 : 0,
                    paddingTop: expanded ? 8 : 0
                }}
            >
                <div className={styles['code-lines-container']}>
                    {algorithm?.codeLines?.map((line, key) => {
                        const className = [
                            styles['code-line'],
                            activeLines.includes(key) ? styles['active-line'] : ''
                        ].join(' ');
                        return(
                            <div 
                                className={className}
                                style={{ paddingLeft: `${line.indentation * 25}px` }}
                            >
                                {line.code}
                            </div>
                        )
                    })}
                </div>
            </motion.div>
        </pre>
    );
}