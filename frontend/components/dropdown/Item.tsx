import styles from './Dropdown.module.scss';

export const Item: React.FC<{
    id: string;
    text: string;
    active: boolean;
    handleClick: (id: string) => void;
}> = ({ id, text, active, handleClick }) => {
    const className = [
        styles['item'],
        active ? styles['active'] : ''
    ].join(' ');
    return(
        <div 
            className={className}
            onClick={() => handleClick(id)}
        >
            {text}
        </div>
    )
}