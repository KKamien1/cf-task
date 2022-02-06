import React, { ChangeEvent } from 'react';
import { InputProps } from './types';
import styled from 'styled-components';

const InputStyled = styled.input`
    margin: 1rem 0;
    padding: 0.4rem 0.4rem;
    font-size: 1rem;
    border-radius: 0 0;
    outline: none;
`;

function Input({ value, setValue, placeholder }: InputProps) {
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return (
        <InputStyled
            type='text'
            value={value}
            onChange={changeHandler}
            placeholder={placeholder}
        />
    );
}

export default Input;
