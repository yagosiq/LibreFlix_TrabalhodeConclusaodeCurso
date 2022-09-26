import { render, screen } from '@testing-library/react';
import App_home from './App';
import App from './App';

test('renders learn react link', () => {
  render(<App_home />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
