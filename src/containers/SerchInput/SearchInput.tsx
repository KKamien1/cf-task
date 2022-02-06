import React, { FormEvent, MouseEvent } from 'react';
import useInput from '../../hooks/useInput';
import styled from 'styled-components';

type Props = {
    setUrlWithValue: (value: string) => void;
    placeholder: string;
};

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;
const Button = styled.button`
    width: 6rem;
    padding: 0.5rem;
    text-align: center;
    margin-left: 1rem;
    border-radius: 0 0;
    border: 0;
    background: #3367d6;
    color: white;
`;
const Buttons = styled.div`
    display: flex;
    justify-content: flex-end;
`;
const Link = styled.a`
    text-decoration: none;
    font-weight: bold;
`;

function SearchInput({ setUrlWithValue, placeholder }: Props) {
    const [Input, value, resetValue] = useInput(placeholder);
    const isValid = value.length > 0;

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isValid) {
            setUrlWithValue(value);
        }
    };

    const resetHandler = (e: MouseEvent<HTMLElement>) => resetValue();

    return (
        <Form onSubmit={submitHandler}>
            {Input}
            <Buttons>
                {isValid && (
                    <Button type='reset' onClick={resetHandler}>
                        Reset
                    </Button>
                )}
                <Button type='submit'>Search</Button>
            </Buttons>
        </Form>
    );
}

export default SearchInput;
