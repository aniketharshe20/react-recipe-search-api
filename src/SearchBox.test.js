import { render, screen } from '@testing-library/react';
import SearchBox from './SearchBox';

test('Search box', () => {
    render(<SearchBox />);
    const element = screen.getByRole('textbox');
    expect(element).toBeInTheDocument();

    const element2 = screen.getByText('Cusine:');
    expect(element2).toBeInTheDocument();
});
