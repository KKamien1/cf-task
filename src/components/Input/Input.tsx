import React, { ChangeEvent } from 'react';

type Props = {
    value: string;
    setValue: (str: string) => void;
    placeholder: string;
};

function Input({ value, setValue, placeholder }: Props) {
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return (
        <div>
            <input
                type='text'
                value={value}
                onChange={changeHandler}
                placeholder={placeholder}
            />
        </div>
    );
}

export default Input;
