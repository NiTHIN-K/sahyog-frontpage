import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the parcel-network concept', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /a unified parcel network/i })).toBeInTheDocument();
});
