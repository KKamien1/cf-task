import React from 'react';
import ListItem from '../../components/ListItem/ListItem';
import Title from '../../components/Title/Title';
import { v4 as uuidv4 } from 'uuid';

import { State } from '../../components/FetchMaker/FetchMaker';
import Loading from '../../components/Loading/Loading';

export default function ResultList({ data, isLoading }: State) {
    console.log('first', data);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div>
            <Title>Results</Title>
            {data.map((item) => (
                <ListItem key={uuidv4()} item={item} />
            ))}
        </div>
    );
}
