import { useEffect, useState } from 'react';

interface APIProps {
    url: string;
    render: (data: any) => JSX.Element;
}

export default function FetchMaker({ url, render }: APIProps) {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function getData() {
            setIsLoading(true);
            const data = await fetch(url);
            const json = await data.json();
            setData(json.entries);
            setIsLoading(false);
        }
        getData();
    }, []);

    return data ? render(data) : null;
}
