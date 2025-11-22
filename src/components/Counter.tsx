import React from 'react'
import { Counter as CounterType } from '../App'

interface CounterProps {
  counter: CounterType
  onIncrement: (counter: CounterType) => void
  onDecrement: (counter: CounterType) => void
  onDelete: (counterId: number) => void
}

const Counter: React.FC<CounterProps> = (props) => {
  const { counter, onIncrement, onDecrement, onDelete } = props

  const getBadgeClasses = () => {
    let classes = 'badge m-2 bg-'
    classes += counter.value === 0 ? 'warning' : 'primary'
    return classes
  }

  const formatCount = () => {
    return counter.value === 0 ? 'Zero' : counter.value
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-4 text-center">
          <span
            data-testid="total-counter"
            style={{ fontSize: 21, padding: 9, verticalAlign: 'middle' }}
            className={getBadgeClasses()}
          >
            {formatCount()}
          </span>
          <button
            data-testid="increment-button"
            className="btn btn-secondary"
            onClick={() => onIncrement(counter)}
          >
            <i className="fa fa-plus-circle" aria-hidden="true" />
          </button>
          <button
            data-testid="decrement-button"
            className="btn btn-info m-2"
            onClick={() => onDecrement(counter)}
            disabled={counter.value === 0}
          >
            <i className="fa fa-minus-circle" aria-hidden="true" />
          </button>
          <button
            data-testid="delete-button"
            className="btn btn-danger"
            onClick={() => onDelete(counter.id)}
          >
            <i className="fa fa-trash-o" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Counter
