import { render, screen, fireEvent } from '@testing-library/react';
import Home from './Home.tsx';

describe('Home test', () => {
  it('renders the Home component', () => {
    render(<Home />);

    expect(screen.getByText('Vite + React')).toBeInTheDocument();
    expect(screen.getByText('count is 0')).toBeInTheDocument();

    fireEvent.click(screen.getByText(/count is/));
    expect(screen.getByText('count is 1')).toBeInTheDocument();
  });
});
