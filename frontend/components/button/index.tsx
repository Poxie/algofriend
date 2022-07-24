import styles from './Button.module.scss';

export const Button: React.FC<{
    children: any;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    type?: 'default' | 'secondary' | 'tertiary' | 'hollow' | 'transparent';
}> = ({ children, onClick, disabled, className, type='default' }) => {
    className = [
        className ? className : '',
        styles['container'],
        styles[type],
        disabled ? styles['disabled'] : ''
    ].join(' ');
    return(
        <button
            onClick={!disabled ? onClick : undefined}
            className={className}
            disabled={disabled}
        >
            {children}
        </button>
    )
}