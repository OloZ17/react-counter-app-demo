import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import App from '../App';

describe('Testing App() Component', () => {
  it('should take a snapshot', () => {
    const { asFragment } = render(<App />);
    expect(asFragment(<App />)).toMatchSnapshot();
  });

  it('should increment', () => {
    render(<App />);
    const toIncrement = screen.queryAllByTestId('increment-button');
    fireEvent.click(toIncrement[0]);
    const counter = screen.queryAllByTestId('total-counter');
    expect(counter[0]).toHaveTextContent('1');
  });

  it('should decrement', () => {
    const state = [{ id: 1, value: 1 }];
    render(<App state={state} />);
    const toDecrement = screen.queryAllByTestId('decrement-button');
    fireEvent.click(toDecrement[0]);
    const newcounter = screen.queryAllByTestId('total-counter');
    expect(newcounter[0]).toHaveTextContent('Zero');
  });

  it('should reset', () => {
    const state = [
      { id: 1, value: 0 },
      { id: 2, value: 1 },
      { id: 3, value: 2 },
      { id: 4, value: 3 },
    ];

    render(<App state={state} />);
    const counter = screen.queryAllByTestId('total-counter');
    const toHandleReset = screen.queryByTestId('reset-button');
    fireEvent.click(toHandleReset);
    expect(counter[0]).toHaveTextContent('Zero');
  });

  it('should delete', () => {
    render(<App />);
    const toDelete = screen.queryAllByTestId('delete-button');
    const size = toDelete.length;
    fireEvent.click(toDelete[0]);
    const newSize = screen.queryAllByTestId('increment-button').length;
    expect(size) > newSize;
  });

  it('should restart', () => {
    const state = [{ id: 1, value: 1 }];

    render(<App state={state} />);
    const toDelete = screen.queryAllByTestId('delete-button');
    const size = toDelete.length;
    fireEvent.click(toDelete[0]);
    const toHandleRestart = screen.queryByTestId('restart-button');
    fireEvent.click(toHandleRestart);
    const newSize = screen.queryAllByTestId('increment-button').length;
    expect(size) > newSize;
  });
});
