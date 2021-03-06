import React, { useState } from 'react';
import NavBar from './components/Navbar';
import Counters from './components/Counters';
import { array } from 'prop-types';

const App = (props) => {
  const { state } = props;

  const initialState = [
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ];

  const [counters, setCounters] = state
    ? useState(state)
    : useState(initialState);

  const handleIncrement = (counter) => {
    const newCounters = [...counters];
    const index = newCounters.indexOf(counter);
    newCounters[index].value++;
    setCounters(newCounters);
  };

  const handleDecrement = (counter) => {
    const newCounters = [...counters];
    const index = newCounters.indexOf(counter);
    newCounters[index].value--;
    setCounters(newCounters);
  };

  const handleReset = () => {
    const resetCounters = counters.map((c) => {
      c.value = 0;
      return c;
    });
    setCounters(resetCounters);
  };

  const handleDelete = (counterId) => {
    const countersDelete = counters.filter((c) => c.id !== counterId);
    setCounters(countersDelete);
  };

  const handleRestart = () => {
    setCounters(initialState);
  };

  return (
    <div className="main__wrap">
      <main className="container">
        <div className="card__box">
          <NavBar totalCounters={counters.filter((c) => c.value > 0).length} />
          <Counters
            counters={counters}
            onReset={handleReset}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onDelete={handleDelete}
            onRestart={handleRestart}
          />
        </div>
      </main>
    </div>
  );
};

App.propTypes = {
  state: array,
};

export default App;
