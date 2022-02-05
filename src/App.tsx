import React, { useMemo, useState } from 'react';
import FetchMaker from './components/FetchMaker/FetchMaker';
import Title from './components/Title/Title';
import ResultList from './containers/ResultsList/ResultList';
import SearchInput from './containers/SerchInput/SearchInput';
import { getQueryHref } from './utils/index';

function App() {
    const [keyword, setKeyword] = useState('');
    const href = useMemo(() => getQueryHref('title', keyword), [keyword]);
    return (
        <div className='App'>
            <Title>Search for public API</Title>
            <SearchInput setKeyword={setKeyword} />
            <FetchMaker
                url={href}
                render={(state) => <ResultList {...state} />}
            />
        </div>
    );
}

export default App;
