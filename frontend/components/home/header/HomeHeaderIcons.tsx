import styles from '../../../styles/Home.module.scss';
import { BinaryTreeIcon } from "../../../assets/icons/BinaryTreeIcon"
import { LinkedListIcon } from "../../../assets/icons/LinkedListIcon"
import { PathIcon } from "../../../assets/icons/PathIcon"
import { SortingIcon } from "../../../assets/icons/SortingIcon"

const icons = [
    SortingIcon,
    PathIcon,
    LinkedListIcon,
    BinaryTreeIcon
]
export const HomeHeaderIcons = () => {
    return(
        <div className={styles['header-icons']}>
            {icons.map((Icon, key) => <Icon key={key} />)}
        </div>
    )
}