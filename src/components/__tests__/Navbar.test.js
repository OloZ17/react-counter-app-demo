import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from '../Navbar';

describe('Testing Navbar() Component', () => {
  const totalCounters = 10;

  it('should take a snapshot', () => {
    const { asFragment } = render(<NavBar totalCounters={totalCounters} />);
    expect(asFragment(<NavBar />)).toMatchSnapshot();
  });

  it('should render totalCounters', () => {
    render(<NavBar totalCounters={totalCounters} />);
    expect(screen.getByTestId('total-counters')).toHaveTextContent('10');
  });
});
