import { useRouter } from 'next/router';
import { getItemsByCategory } from '../../assets/algorithms/logic';
import { Dropdown } from '../../components/dropdown';
import styles from '../../styles/Sorting.module.scss';

export const SortingDropdown = () => {
    const router = useRouter();
    const { algorithmId, algorithmCategory } = router.query as { algorithmId: string, algorithmCategory: string };
    const items = getItemsByCategory('sorting');

    // Updating location on change
    const changeAlgorithm = (id: string) => {
        router.push(`/algorithms/${algorithmCategory}/${id}`)
    }

    return(
        <Dropdown 
            items={items}
            defaultActive={algorithmId}
            onChange={changeAlgorithm}
            direction={'up'}
            containerClassName={styles['dropdown']}
        />
    )
}