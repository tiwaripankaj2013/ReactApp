import { render, screen } from '@testing-library/react';
import App from './App';

test('Welcome TO JS Learning', () => {
  render(<App />);
  const linkElement = screen.getByText(/TO JS Learning/i);
  expect(linkElement).toBeInTheDocument();
});
