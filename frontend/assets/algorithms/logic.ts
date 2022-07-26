import { rows } from './index.json';
import { AlgorithmCategories } from './types';

export const getItemsByCategory = (categoryId: AlgorithmCategories) => {
    const row = rows.find(row => row.id === categoryId);
    const items = row?.items || [];
    return items;
}
export const getItemById = (categoryId: AlgorithmCategories, itemId: string) => {
    const row = rows.find(row => row.id === categoryId);
    const items = row?.items || [];
    const item = items.find(item => item.id === itemId);
    return item;
}