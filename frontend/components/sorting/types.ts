export type ContextType = {
    items: Item[];
    setItems: (items: Item[]) => void;
    delay: number;
    setDelay: (delay: number) => void;
    itemAmount: number;
    setItemAmount: (amount: number) => void;
    started: boolean;
    start: () => void;
    end: () => void;
    stop: () => void;
}
export type Item = {
    state: 'done' | 'pivot' | 'active' | 'neutral' | 'error';
    value: number;
}