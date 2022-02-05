import React, { ChangeEvent, useState } from 'react';

function Input() {
    const [value, setValue] = useState<string>('');
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
