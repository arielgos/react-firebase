import { render, screen } from '@testing-library/react';
import App from './App';

test('renders page', () => {
  render(<App />);
  const linkElement = screen.getByText(/You need to enable JavaScript to run this app./i);
  expect(linkElement).toBeInTheDocument();
});
