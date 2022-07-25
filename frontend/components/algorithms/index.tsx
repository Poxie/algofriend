import styles from '../../styles/Algorithms.module.scss';
import { useRouter } from "next/router"
import { Input } from "../input"
import { AlgoirthmList } from './AlgorithmList';

export const Algorithms = () => {
    const router = useRouter();

    // Updating search params
    const updateSearch = (search: string) => {
        router.replace(`/algorithms`, { query: search ? { search } : {} }, { shallow: true });
    }

    return(
        <div className={styles['container']}>
            <Input 
                placeholder={'Search for algorithm...'}
                onChange={updateSearch}
                inputClassName={styles['input']}
            />
            <AlgoirthmList />
        </div>
    )
}