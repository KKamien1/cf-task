import React from 'react';

type Props = {
    as?: string;
    children: string;
};

export default function Title({ as, children }: Props) {
    switch (as) {
        case 'h1':
            return <h1>{children}</h1>;
            break;
        case 'h2':
            return <h2>{children}</h2>;
            break;
        case 'h3':
            return <h3>{children}</h3>;
            break;
        default:
            return <h3>{children}</h3>;
    }
}
