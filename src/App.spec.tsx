import { render, screen, fireEvent } from '@testing-library/react';
import App from './App.tsx';

describe('App test', () => {
  it('renders the App component', () => {
    render(<App />);

    expect(screen.getByText('Vite + React')).toBeInTheDocument();
    expect(screen.getByText('count is 0')).toBeInTheDocument();

    fireEvent.click(screen.getByText(/count is/));
    expect(screen.getByText('count is 1')).toBeInTheDocument();
  });
});
