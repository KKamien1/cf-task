import React, { ChangeEvent } from 'react';
import { InputProps } from './types';

function Input({ value, setValue, placeholder }: InputProps) {
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return (
        <input
            type='text'
            value={value}
            onChange={changeHandler}
            placeholder={placeholder}
        />
    );
}

export default Input;
