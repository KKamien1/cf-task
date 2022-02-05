import React, { MouseEvent } from 'react';

type Props = {
    type: 'button' | 'submit' | 'reset' | undefined;
    label: string;
    clickHandler: (e: MouseEvent) => void;
};

function Button({ type, label, clickHandler }: Props) {
    return (
        <button type={type} onClick={clickHandler}>
            {label}
        </button>
    );
}

export default Button;
