import React from 'react'
import ListItem from '../../components/ListItem/ListItem'
import { AssetType } from '../../components/ListItem/types'
import Title from '../../components/Title/Title'

type Props = {
    results: AssetType[]
}

export default function ResultList({ results = [] }: Props) {
    console.log('first', results)
    return (
        <div>
            <Title>Results</Title>
            {results.map((item) => (
                <ListItem key={item.API} item={item} />
            ))}
        </div>
    )
}
