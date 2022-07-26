import styles from './Dropdown.module.scss';
import { useEffect, useRef, useState } from "react";
import { Item } from "./Item";

export const Dropdown: React.FC<{
    items: { title: string, id: string }[];
    defaultActive?: string;
    onChange: (id: string) => void;
    direction?: 'up' | 'down';
    containerClassName?: string;
}> = ({ items, defaultActive, onChange, direction, containerClassName }) => {
    const [active, setActive] = useState(defaultActive || items[0].id);
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    // Determining active item
    const activeItem = items.find(item => item.id === active);

    // Checking if click is outside of component
    const checkForClickOutside = (e: MouseEvent) => {
        // @ts-ignore: this works
        if(ref.current && !ref.current.contains(e.target)) {
            setOpen(false);
        }
    }

    // Handling event listenrers for click outside component
    useEffect(() => {
        document.addEventListener('mousedown', checkForClickOutside);
        return () => document.removeEventListener('mousedown', checkForClickOutside);
    }, []);

    // On item click
    const handleClick = (id: string) => {
        setActive(id);
        setOpen(false);
        onChange && onChange(id);
    }

    // Determining classNames
    containerClassName = [
        styles['container'],
        containerClassName
    ].join(' ');
    const activeClassName = [
        styles['item'],
        styles['selected'],
        open ? styles['open'] : ''
    ].join(' ');
    const itemsClassName = [
        styles['items'],
        direction === 'up' ? styles['up'] : styles['down']
    ].join(' ');
    return(
        <div 
            className={containerClassName} 
            ref={ref}
        >
            <div 
                className={activeClassName} 
                onClick={() => setOpen(!open)}
            >
                {activeItem?.title}
            </div>

            {open && (
                <div className={itemsClassName}>
                    {items.map(item => {
                        return(
                            <Item 
                                id={item.id}
                                text={item.title}
                                active={item.id === active}
                                handleClick={handleClick}
                                key={item.id}
                            />
                        )
                    })}
                </div>
            )}
        </div>
    )
}