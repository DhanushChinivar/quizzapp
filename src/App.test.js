import { render, screen } from '@testing-library/react';
import App from './App';

test('renders quiz title', () => {
  render(<App />);
  const title = screen.getByText(/quiz app/i);
  expect(title).toBeInTheDocument();
});
