import React from 'react';
import { func, shape, number } from 'prop-types';

const Counter = (props) => {
  const { counter, onIncrement, onDecrement, onDelete } = props;

  const getBadgeClasses = () => {
    let classes = 'badge m-2 bg-';
    classes += counter.value === 0 ? 'warning' : 'primary';
    return classes;
  };

  const formatCount = () => {
    return counter.value === 0 ? 'Zero' : counter.value;
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-4 text-center">
          <span
            style={{ fontSize: 21, padding: 9, verticalAlign: 'middle' }}
            className={getBadgeClasses()}
          >
            {formatCount()}
          </span>
          <button
            className="btn btn-secondary"
            onClick={() => onIncrement(counter)}
          >
            <i className="fa fa-plus-circle" aria-hidden="true" />
          </button>
          <button
            className="btn btn-info m-2"
            onClick={() => onDecrement(counter)}
            disabled={counter.value === 0 ? 'disabled' : ''}
          >
            <i className="fa fa-minus-circle" aria-hidden="true" />
          </button>
          <button
            className="btn btn-danger"
            onClick={() => onDelete(counter.id)}
          >
            <i className="fa fa-trash-o" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
};

Counter.propTypes = {
  onIncrement: func,
  onDecrement: func,
  onDelete: func,
  counter: shape({
    id: number,
    value: number,
  }),
};

export default Counter;
