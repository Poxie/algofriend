export type ContextType = {
    setItems: (items: Item[]) => void;
    setDelay: (delay: number) => void;
    setItemAmount: (amount: number) => void;
}
export type Item = {
    state: 'done' | 'pivot' | 'active' | 'neutral' | 'error';
    value: number;
}