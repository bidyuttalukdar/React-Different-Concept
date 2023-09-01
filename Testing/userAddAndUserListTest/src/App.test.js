import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i); //it will check "learn react" string in screen with out case type
  expect(linkElement).toBeInTheDocument();
});


