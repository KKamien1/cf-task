import { PUBLIC_API_URL } from '../constants';

export default function getQueryHref(key: string, value: string) {
    const url = new URL(PUBLIC_API_URL);
    url.searchParams.append(key, value);

    return url.href;
}
