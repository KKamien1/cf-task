import React from 'react';
import styled from 'styled-components';

type Props = {
    as?: string;
    children: string;
};

const H1 = styled.h1`
    font-size: 2rem;
    font-weight: normal;
`;
const H2 = styled.h2`
    font-size: 1.6rem;
    font-weight: normal;
`;
const H3 = styled.h3`
    font-size: 1.4rem;
    font-weight: normal;
`;

function Title({ as, children }: Props) {
    switch (as) {
        case 'h1':
            return <H1>{children}</H1>;
        case 'h2':
            return <H2>{children}</H2>;
        case 'h3':
            return <H3>{children}</H3>;
        default:
            return <H1>{children}</H1>;
    }
}

export default Title;
