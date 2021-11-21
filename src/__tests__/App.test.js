import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

describe('Testing App() Component', () => {
  it('should take a snapshot', () => {
    const { asFragment } = render(<App />);
    expect(asFragment(<App />)).toMatchSnapshot();
  });
});
