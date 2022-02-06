import { render, screen, cleanup } from '@testing-library/react';
import { AssetType } from '../../components/ListItem/types';
import ResultsList from './ResultsList';

const data: AssetType[] = [
    {
        Link: 'https://couponfollow.com/',
        API: 'Sample Title1',
        Description: 'Info1',
        Auth: 'fakeText',
        Category: 'fakeText',
        Cors: 'yes',
        HTTPS: false,
    },
    {
        Link: 'https://couponfollow.com/',
        API: 'Sample Title2',
        Description: 'Info2',
        Auth: 'fakeText',
        Category: 'fakeText',
        Cors: 'yes',
        HTTPS: false,
    },
    {
        Link: 'https://couponfollow.com/',
        API: 'Sample Title3',
        Description: 'Info3',
        Auth: 'fakeText',
        Category: 'fakeText',
        Cors: 'yes',
        HTTPS: false,
    },
];

const props = {
    data,
    isLoading: false,
};

describe('ResultsList', () => {
    it('renders with initial title heading', async () => {
        render(<ResultsList data={[]} isLoading={false} />);
        const noresults = screen.getByRole('heading', { name: 'No Results' });
        expect(noresults).toBeInTheDocument();
        cleanup();
    });
    it('renders with title heading', async () => {
        render(<ResultsList {...props} />);
        const results = screen.getByRole('heading', { name: 'Results' });
        expect(results).toBeInTheDocument();
        cleanup();
    });
});
