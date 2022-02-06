import React from 'react';
import { AssetType } from './types';
import styled from 'styled-components';

type Props = {
    item: AssetType;
};

const Wrapper = styled.div`
    margin: 1rem 0 0 0;
    padding: 0rem;
    border-bottom: 1px solid #000;
`;
const Link = styled.a`
    text-decoration: none;
    font-weight: bold;
    color: black;
`;

function ListItem({ item }: Props) {
    const { Link: href, API: title, Description: info } = item;
    return (
        <Wrapper>
            <Link href={href} target='_blank' rel='noreferrer'>
                {title}
            </Link>
            <p>{info}</p>
        </Wrapper>
    );
}

export default ListItem;
