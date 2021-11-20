import React from 'react';
import { render, screen } from '@testing-library/react';
import Counter from '../counter';

describe('Testing Counter() Component', () => {
  const counter = { id: 1, value: 0 };

  const onIncrement = jest.fn();
  const onDecrement = jest.fn();
  const onDelete = jest.fn();

  it('should take a snapshot', () => {
    const { asFragment } = render(
      <Counter
        counter={counter}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onDelete={onDelete}
      />
    );
    expect(asFragment(<Counter />)).toMatchSnapshot();
  });

  it('should render formatCount Zero with right warning class', () => {
    render(
      <Counter
        counter={counter}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onDelete={onDelete}
      />
    );
    expect(screen.getByText('Zero')).toBeInTheDocument();
    expect(screen.getByText('Zero')).toHaveClass('badge m-2 bg-warning');
    expect(screen.getByTestId('decrement-button')).toHaveAttribute('disabled');
  });
  it('should render formatCount 1 with right primary class', () => {
    counter.value = 1;
    render(
      <Counter
        counter={counter}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onDelete={onDelete}
      />
    );
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('1')).toHaveClass('badge m-2 bg-primary');
    expect(screen.getByTestId('decrement-button')).not.toHaveAttribute(
      'disabled'
    );
  });
});
