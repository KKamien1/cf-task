import { render, screen, cleanup } from '@testing-library/react';

import ListItem from './ListItem';

const item = {
    Link: 'https://couponfollow.com/',
    API: 'Sample Title',
    Description: 'Info',
};

describe('ListItem', () => {
    beforeEach(() => {
        render(<ListItem item={item} />);
    });
    afterEach(() => {
        cleanup();
    });
    it('renders with title', async () => {
        const title = screen.getByText('Sample Title');
        expect(title).toBeInTheDocument();
    });
    it('renders with description', async () => {
        const description = screen.getByText('Info');
        expect(description).toBeInTheDocument();
    });
    it('renders with link', async () => {
        const link = screen.getByRole('link');
        expect(link).toBeInTheDocument();
        expect(link.href).toBe('https://couponfollow.com/');
    });
});
