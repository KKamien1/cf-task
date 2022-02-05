import React, { FormEvent, MouseEvent } from 'react';
import useInput from '../../hooks/useInput';

type Props = {
    setKeyword: (value: string) => void;
};

function SearchInput({ setKeyword }: Props) {
    const [Input, value, resetValue] = useInput();
    const isValid = value.length > 0;

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isValid) {
            setKeyword(value);
        }
    };

    const resetHandler = (e: MouseEvent<HTMLElement>) => resetValue();

    return (
        <form onSubmit={submitHandler}>
            {Input}
            <button type='submit'>Search</button>
            {isValid && (
                <button type='reset' onClick={resetHandler}>
                    Reset
                </button>
            )}
        </form>
    );
}

export default SearchInput;
