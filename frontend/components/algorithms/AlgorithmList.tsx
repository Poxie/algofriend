import { rows } from '../../assets/algorithms/index.json';
import { AlgorithmRow } from './AlgorithmRow';

export const AlgoirthmList = () => {
    return(
        <>
            {rows.map(row => <AlgorithmRow {...row} key={row.title} />)}
        </>
    )
}