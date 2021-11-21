import React from 'react';
import Counter from './Counter';
import { func, array } from 'prop-types';

const Counters = (props) => {
  const { counters, onReset, onIncrement, onDelete, onDecrement, onRestart } =
    props;
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-4 text-center">
          <button
            data-testid="reset-button"
            className="btn btn-success m-2"
            onClick={onReset}
            disabled={counters.length === 0 ? 'disabled' : ''}
          >
            <i className="fa fa-refresh" aria-hidden="true" />
          </button>
          <button
            data-testid="restart-button"
            className="btn btn-primary m-2"
            onClick={onRestart}
            disabled={counters.length !== 0 ? 'disabled' : ''}
          >
            <i className="fa fa-recycle" aria-hidden="true" />
          </button>
        </div>
      </div>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          counter={counter}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

Counters.propTypes = {
  onIncrement: func,
  onDecrement: func,
  onReset: func,
  onDelete: func,
  onRestart: func,
  counters: array,
};

export default Counters;
