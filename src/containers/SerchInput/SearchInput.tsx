import React, { ChangeEvent, useState } from 'react';
import Input from '../../components/Input/Input';
import Title from '../../components/Title/Title';

function SearchInput() {
    // const [value, setValue] = useState<string>('');
    // const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     setValue(e.target.value);
    // };

    return (
        <>
            <Title>Search for public API</Title>
            <form>
                <Input />
                <button type='submit'>Search</button>
            </form>
        </>
    );
}

export default SearchInput;
