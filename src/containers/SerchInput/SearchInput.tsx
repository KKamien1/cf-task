import React, { FormEvent, MouseEvent } from 'react';
import useInput from '../../hooks/useInput';

type Props = {
    setUrlWithValue: (value: string) => void;
    placeholder: string;
};

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
