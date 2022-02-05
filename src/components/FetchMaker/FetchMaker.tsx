import { useEffect, useState } from 'react';
import { AssetType } from '../ListItem/types';

export interface State {
    data: AssetType[];
    isLoading: boolean;
}

type Filter = (item: AssetType) => boolean;
interface APIProps {
    url: string;
    limit?: number;
    filters?: Filter[];
    render: (state: State) => JSX.Element;
}

export default function FetchMaker({
    url,
    limit,
    filters = [],
    render,
}: APIProps) {
    const [state, setState] = useState<State>({
        data: [],
        isLoading: false,
    });
    useEffect(() => {
        if (url) {
            try {
                getData();
            } catch (error) {
                console.error(error);
            }
        }
        async function getData() {
            setState((state) => ({ ...state, isLoading: true }));
            const response = await fetch(url);
            const { entries } = await response.json();

            let data = entries ? entries : [];

            filters.forEach((filterFn) => {
                data = data.filter(filterFn);
            });

            if (limit) {
                data = data.slice(0, limit);
            }

            setState({ data, isLoading: false });
        }
    }, [url, filters, limit]);

    return render(state);
}
