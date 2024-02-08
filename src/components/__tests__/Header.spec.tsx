import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import Header from '../Header';

describe('Header', () => {
  it('should render if no prop is passed', () => {
    render(<Header />);
  });

  it('should render a text if the title prop is passed', () => {
    render(<Header title='todos' />);
    screen.getByRole('heading', { level: 1, name: /todos/i });
  });
});
