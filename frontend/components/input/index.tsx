import React, { HTMLInputTypeAttribute, useEffect, useRef, useState } from 'react';
import styles from './Input.module.scss';

export const Input: React.FC<{
    focusOnMount?: boolean;
    containerClassName?: string;
    inputClassName?: string;
    onChange?: (value: string) => void;
    onSubmit?: (value: string) => void;
    value?: string;
    type?: HTMLInputTypeAttribute;
    placeholder?: string;
}> = ({ focusOnMount, containerClassName, inputClassName, onChange, onSubmit, placeholder, type='text', value: _value }) => {
    const [value, setValue] = useState(_value || '');
    const ref = useRef<HTMLInputElement>(null);

    // Handling change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
        onChange && onChange(e.currentTarget.value);
    }
    // Handling keypress
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter' && e.currentTarget.value) {
            onSubmit && onSubmit(e.currentTarget.value);
        }
    }
    // Focusing on mount
    useEffect(() => {
        if(focusOnMount) {
            ref.current?.focus();
        }
    }, [focusOnMount]);

    containerClassName = [
        styles['container'],
        containerClassName
    ].join(' ');
    inputClassName = [
        styles['input'],
        inputClassName
    ].join(' ');
    return(
        <div className={containerClassName}>
            <input 
                type={type}
                onChange={handleChange}
                placeholder={placeholder}
                onKeyDown={handleKeyDown}
                className={inputClassName}
                value={value}
                required
                ref={ref}
            />
        </div>
    )
}