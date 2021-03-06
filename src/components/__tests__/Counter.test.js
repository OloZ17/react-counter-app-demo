import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../Counter';

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
    expect(screen.getByTestId('total-counter')).toHaveTextContent('Zero');
    expect(screen.getByTestId('total-counter')).toHaveClass(
      'badge m-2 bg-warning'
    );
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
    expect(screen.getByTestId('total-counter')).toHaveTextContent('1');
    expect(screen.getByTestId('total-counter')).toHaveClass(
      'badge m-2 bg-primary'
    );
    expect(screen.getByTestId('decrement-button')).not.toHaveAttribute(
      'disabled'
    );
  });

  it('should click', () => {
    render(
      <Counter
        counter={counter}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onDelete={onDelete}
      />
    );
    const toIncrementClick = screen.getByTestId('increment-button');
    const toDecrementClick = screen.getByTestId('decrement-button');
    const toDeleteClick = screen.getByTestId('delete-button');
    fireEvent.click(toDecrementClick);
    fireEvent.click(toIncrementClick);
    fireEvent.click(toDeleteClick);
    expect(onIncrement).toBeCalled();
    expect(onDecrement).toBeCalled();
    expect(onDelete).toBeCalled();
  });
});
