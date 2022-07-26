import { rows } from './index.json';
export type AlgorithmRow = typeof rows[0];
export type AlgorithmItem = AlgorithmRow['items'][0];
export type AlgorithmCategories = 'sorting' | 'pathfinding';