import styles from '../../styles/Algorithms.module.scss';
import { useRouter } from "next/router"
import { Input } from "../input"
import { AlgoirthmList } from './AlgorithmList';

export const Algorithms = () => {
    const router = useRouter();

    // Updating search params
    const updateSearch = (search: string) => {
        if(!search) return router.replace('/algorithms', undefined, { shallow: true });
        router.replace(`/algorithms?search=${search}`, undefined, { shallow: true });
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