import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText, getByTestId } = render(<App />);
  const linkElement = getByText(/learn react/i);
  const app = getByTestId('app');
  expect(linkElement).toBeInTheDocument();
  expect(app).toBeInTheDocument();
});
