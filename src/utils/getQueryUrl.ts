import { PUBLIC_API_URL } from '../constants';

export function getQueryHref(key: string) {
    const url = new URL(PUBLIC_API_URL);

    return function (value: string) {
        url.searchParams.set(key, value);
        return url.href;
    };
}

export const getQueryTitle = getQueryHref('title');
