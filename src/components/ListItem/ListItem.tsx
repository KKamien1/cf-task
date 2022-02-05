import React from 'react'
import { AssetType } from './types'

type Props = {
    item: AssetType
}

export default function ListItem({ item }: Props) {
    return <a href={item.Link}>{item.API}</a>
}
