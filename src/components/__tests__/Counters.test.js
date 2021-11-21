import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counters from '../Counters';

describe('Testing Counters() Component', () => {
  const counters = [
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ];

  const onReset = jest.fn();
  const onRestart = jest.fn();

  it('should take a snapshot', () => {
    const { asFragment } = render(
      <Counters onReset={onReset} onRestart={onRestart} counters={counters} />
    );
    expect(asFragment(<Counters />)).toMatchSnapshot();
  });

  it('should render buttons with right attributes with counter.length > 0 and should click the right button', () => {
    render(
      <Counters onReset={onReset} onRestart={onRestart} counters={counters} />
    );
    expect(screen.getByTestId('reset-button')).not.toHaveAttribute('disabled');
    expect(screen.getByTestId('restart-button')).toHaveAttribute('disabled');
    const toOnReset = screen.getByTestId('reset-button');
    fireEvent.click(toOnReset);
    expect(onReset).toBeCalled();
  });

  it('should render buttons with right attributes with counter.length < 1 and should click the right button', () => {
    const counters = [];
    render(
      <Counters onReset={onReset} onRestart={onRestart} counters={counters} />
    );
    expect(screen.getByTestId('reset-button')).toHaveAttribute('disabled');
    expect(screen.getByTestId('restart-button')).not.toHaveAttribute(
      'disabled'
    );
    const toOnRestart = screen.getByTestId('restart-button');
    fireEvent.click(toOnRestart);
    expect(onRestart).toBeCalled();
  });
});
