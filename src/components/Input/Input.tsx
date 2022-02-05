import React, { ChangeEvent, useState } from 'react';

type Props = {
    value: string;
    setValue: (str: string) => void;
};

function Input({ value, setValue }: Props) {
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return (
        <div>
            <input type='text' value={value} onChange={changeHandler} />
        </div>
    );
}

export default Input;
