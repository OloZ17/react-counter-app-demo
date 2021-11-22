import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import App from '../App';

describe('Testing App() Component', () => {
  it('should take a snapshot', () => {
    const { asFragment } = render(<App />);
    expect(asFragment(<App />)).toMatchSnapshot();
  });

  it('should increment & decrement', () => {
    render(<App />);
    const toIncrement = screen.queryAllByTestId('increment-button');
    fireEvent.click(toIncrement[0]);
    const counter = screen.queryAllByTestId('total-counter');
    expect(counter[0]).toHaveTextContent('1');
    const toDecrement = screen.queryAllByTestId('decrement-button');
    expect(toDecrement.length).toBeTruthy();
    fireEvent.click(toDecrement[0]);
    const newcounter = screen.queryAllByTestId('total-counter');
    expect(newcounter[0]).toHaveTextContent('Zero');
  });

  it('should reset', () => {
    render(<App />);
    const toIncrement = screen.queryAllByTestId('increment-button');
    fireEvent.click(toIncrement[0]);
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
    render(<App />);
    const toDelete = screen.queryAllByTestId('delete-button');
    const size = toDelete.length;
    fireEvent.click(toDelete[0]);
    fireEvent.click(toDelete[1]);
    fireEvent.click(toDelete[2]);
    fireEvent.click(toDelete[3]);
    const toHandleRestart = screen.queryByTestId('restart-button');
    fireEvent.click(toHandleRestart);
    const newSize = screen.queryAllByTestId('increment-button').length;
    expect(size) > newSize;
  });
});
