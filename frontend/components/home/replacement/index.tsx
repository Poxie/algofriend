import styles from '../../../styles/Home.module.scss';
import { DividerIcon } from "../../../assets/icons/DividerIcon"
import { ReplacementText } from './ReplacementText';
import { ReplacementTrash } from './ReplacementTrash';

export const Replacement = () => {
    return(
        <div className={styles['replacement']}>
            <DividerIcon />
            
            <div className={styles['replacement-main']}>
                <ReplacementText />
                <ReplacementTrash />
            </div>

            <DividerIcon />
        </div>
    )
}