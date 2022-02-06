import React, { useState, useCallback } from 'react';
import FetchMaker from './components/FetchMaker/FetchMaker';
import Title from './components/Title/Title';
import { MAX_WIDTH, RESULTS_LIMIT } from './constants';
import ResultsList from './containers/ResultsList/ResultsList';
import SearchInput from './containers/SerchInput/SearchInput';
import { getQueryTitle, filterCORS, filterByDescription } from './utils/index';
import styled from 'styled-components';
import ErrorBoundary from './components/Error/Error';

const Wrapper = styled.div`
    margin: 0 auto;
    padding: 2rem;
    max-width: ${MAX_WIDTH}px;
`;

function App() {
    const [url, setUrl] = useState('');
    const getUrl = useCallback(
        (keyword: string) => setUrl(getQueryTitle(keyword)),
        []
    );

    return (
        <Wrapper>
            <Title>Search for public API</Title>
            <SearchInput
                setUrlWithValue={getUrl}
                placeholder='Enter API name…'
            />
            <ErrorBoundary>
                <FetchMaker
                    url={url}
                    limit={RESULTS_LIMIT}
                    filters={[filterCORS, filterByDescription]}
                    render={(state) => <ResultsList {...state} />}
                />
            </ErrorBoundary>
        </Wrapper>
    );
}

export default App;
