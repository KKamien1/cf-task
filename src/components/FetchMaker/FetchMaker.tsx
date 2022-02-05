import { useEffect, useState } from 'react';
import { AssetType } from '../ListItem/types';

export interface State {
    data: AssetType[];
    isLoading: boolean;
}

interface APIProps {
    url: string;
    render: (state: State) => JSX.Element;
}

export default function FetchMaker({ url, render }: APIProps) {
    const [state, setState] = useState<State>({
        data: [],
        isLoading: false,
    });

    useEffect(() => {
        async function getData() {
            setState((state) => ({ ...state, isLoading: true }));
            const response = await fetch(url);
            const { entries } = await response.json();
            setState({ data: entries, isLoading: false });
        }
        getData();
    }, [url]);

    return render(state);
}
