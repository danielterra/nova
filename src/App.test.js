import { render, screen } from '@testing-library/react';
import DataRecord from './DataRecord';

test('renders learn react link', () => {
  render(<DataRecord />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
