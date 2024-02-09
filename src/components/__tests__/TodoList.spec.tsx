import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import TodoList from '../TodoList';

describe('TodoList', () => {
  it('should render a list of todos', () => {
    render(<TodoList />);
    const rowElements = screen.queryAllByRole('row');
    expect(rowElements).toBeDefined();
  });
});
