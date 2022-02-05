import React, { FormEvent } from 'react';
import Title from '../../components/Title/Title';
import useInput from '../../hooks/useInput';
function SearchInput() {
    const [Input, keyword, resetKeyword] = useInput();

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (keyword.length > 0) {
            resetKeyword();
        }
    };
    return (
        <>
            <Title>Search for public API</Title>
            <form onSubmit={submitHandler}>
                {Input}
                <button type='submit'>Search</button>
            </form>
        </>
    );
}

export default SearchInput;
