import React from 'react';
import ListItem from '../../components/ListItem/ListItem';
import Title from '../../components/Title/Title';
import { v4 as uuidv4 } from 'uuid';
import { State } from '../../components/FetchMaker/FetchMaker';
import Loading from '../../components/Loading/Loading';

function ResultList({ data, isLoading }: State) {
    if (isLoading) {
        return <Loading />;
    }

    if (data?.length === 0) {
        return <Title>No Results</Title>;
    }

    return (
        <>
            <Title as='h2'>Results</Title>
            {data.map((item) => (
                <ListItem key={uuidv4()} item={item} />
            ))}
        </>
    );
}

export default ResultList;
