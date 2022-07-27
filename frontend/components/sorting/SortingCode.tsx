import styles from '../../styles/Sorting.module.scss';
import { useRouter } from "next/router"
import { getItemById } from "../../assets/algorithms/logic";
import { AlgorithmCategories } from "../../assets/algorithms/types";

export const SortingCode: React.FC<{
    activeLines: number[];
}> = ({ activeLines }) => {
    const { algorithmId, algorithmCategory } = useRouter().query as { algorithmId: string, algorithmCategory: AlgorithmCategories };
    const algorithm = getItemById(algorithmCategory, algorithmId);
    return(
        <pre className={styles['code']}>
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
        </pre>
    );
}