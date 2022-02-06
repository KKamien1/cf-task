import { render, screen, cleanup } from '@testing-library/react';

import SearchInput from './SearchInput';

const props = {
    setUrlWithValue: () => {},
    placeholder: 'Placeholder text',
};

describe('SearchInput', () => {
    beforeEach(() => {
        render(<SearchInput {...props} />);
    });
    afterEach(() => {
        cleanup();
    });
    it('renders with placeholder', async () => {
        const placeholder = screen.getByPlaceholderText('Placeholder text');
        expect(placeholder).toBeInTheDocument();
    });
    it('renders with submit button', async () => {
        const SubmitBtn = screen.queryByRole('button', { name: 'Search' });
        expect(SubmitBtn).toBeTruthy();
    });
    it('renders without reset button', async () => {
        const resetBtn = screen.queryByRole('button', { name: 'Reset' });
        expect(resetBtn).toBeFalsy();
    });
});
