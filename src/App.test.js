import { render, screen } from '@testing-library/react';
import App from './App';

test('Recipe Search', () => {
  render(<App />);
  const element = screen.getByText(/Recipe Search/i);
  expect(element).toBeInTheDocument();
});
