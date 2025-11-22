import React, { useState } from 'react'
import NavBar from './components/Navbar'
import Counters from './components/Counters'

export interface Counter {
  id: number
  value: number
}

interface AppProps {
  state?: Counter[]
}

const App: React.FC<AppProps> = (props) => {
  const { state } = props

  const initialState: Counter[] = [
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ]

  const [counters, setCounters] = useState<Counter[]>(
    state ? state : initialState
  )

  const handleIncrement = (counter: Counter) => {
    const newCounters = counters.map((c) =>
      c.id === counter.id ? { ...c, value: c.value + 1 } : c
    )
    setCounters(newCounters)
  }

  const handleDecrement = (counter: Counter) => {
    const newCounters = counters.map((c) =>
      c.id === counter.id ? { ...c, value: c.value - 1 } : c
    )
    setCounters(newCounters)
  }

  const handleReset = () => {
    const resetCounters = counters.map((c) => ({ ...c, value: 0 }))
    setCounters(resetCounters)
  }

  const handleDelete = (counterId: number) => {
    const countersDelete = counters.filter((c) => c.id !== counterId)
    setCounters(countersDelete)
  }

  const handleRestart = () => {
    setCounters(initialState)
  }

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
  )
}

export default App
