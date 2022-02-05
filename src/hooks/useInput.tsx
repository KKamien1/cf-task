import React, { useState } from 'react';
import Input from '../components/Input/Input';

type useInputType = [JSX.Element, string, () => void];

function useInput(placeholder: string): useInputType {
    const [value, setValue] = useState<string>('');
    const textField = (
        <Input
            value={value}
            setValue={setValue}
            placeholder={placeholder}
        ></Input>
    );
    const resetValue = () => setValue('');

    return [textField, value, resetValue];
}

export default useInput;
