import React from 'react';
import { AssetType } from './types';

type Props = {
    item: AssetType;
};

function ListItem({ item }: Props) {
    const { Link: href, API: title, Description: info } = item;
    return (
        <>
            <a href={href} target='_blank' rel='noreferrer'>
                {title}
            </a>
            <p>{info}</p>
        </>
    );
}

export default ListItem;
