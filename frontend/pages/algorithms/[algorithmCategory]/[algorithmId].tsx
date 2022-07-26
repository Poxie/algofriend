import { useRouter } from "next/router";
import { getItemById } from "../../../assets/algorithms/logic";
import { AlgorithmCategories } from "../../../assets/algorithms/types";
import { Sorting } from "../../../components/sorting/Sorting";

const algorithm = () => {
    const { algorithmCategory } = useRouter().query as { algorithmCategory: AlgorithmCategories };

    switch(algorithmCategory) {
        case 'sorting':
            return <Sorting />;
        default:
            return <div>404</div>;
    }
}
export default algorithm;