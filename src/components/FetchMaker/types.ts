import { AssetType } from '../ListItem/types';

export interface FetchMakerState {
    data: AssetType[];
    isLoading: boolean;
}

export type Filter = (item: AssetType) => boolean;

export interface APIProps {
    url: string;
    limit?: number;
    filters?: Filter[];
    render: (state: FetchMakerState) => JSX.Element;
}
