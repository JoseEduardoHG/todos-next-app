import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Home from '../page';

describe('Home', () => {
  it('should render get started by editing', () => {
    render(<Home />);

    screen.getByText(/get started by editing/i);
  });

  it('should render docs', () => {
    render(<Home />);

    const element = screen.getByRole('heading', {
      level: 2,
      name: /docs/i,
    });

    expect(element).toBeDefined();
  });

  it('should render learn', () => {
    render(<Home />);

    const element = screen.getByRole('heading', { level: 2, name: /learn/i });

    expect(element).toBeDefined();
  });

  it('should render templates', () => {
    render(<Home />);

    const element = screen.getByRole('heading', {
      level: 2,
      name: /templates/i,
    });

    expect(element).toBeDefined();
  });

  it('should render deploy', () => {
    render(<Home />);

    const element = screen.getByRole('heading', { level: 2, name: /deploy/i });

    expect(element).toBeDefined();
  });
});
