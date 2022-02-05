import React, { useMemo, useState, useCallback } from 'react';
import FetchMaker from './components/FetchMaker/FetchMaker';
import Title from './components/Title/Title';
import { RESULTS_LIMIT } from './constants';
import ResultList from './containers/ResultsList/ResultList';
import SearchInput from './containers/SerchInput/SearchInput';
import { getQueryTitle, filterCORS, filterByDescription } from './utils/index';

function App() {
    const [url, setUrl] = useState('');
    const getUrl = useCallback(
        (keyword: string) => setUrl(getQueryTitle(keyword)),
        []
    );

    return (
        <>
            <Title>Search for public API</Title>
            <SearchInput
                setUrlWithValue={getUrl}
                placeholder='Enter API name…'
            />
            <FetchMaker
                url={url}
                limit={RESULTS_LIMIT}
                filters={[filterCORS, filterByDescription]}
                render={(state) => <ResultList {...state} />}
            />
        </>
    );
}

export default App;
