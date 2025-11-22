import React from 'react'

interface NavBarProps {
  totalCounters: number
}

const NavBar: React.FC<NavBarProps> = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light">
      <div className="navbar-brand">
        <i className="fa fa-shopping-cart fa-lg m-2" aria-hidden="true" />
        <span
          data-testid="total-counters"
          className="badge badge-pill bg-info m-2"
          style={{ width: 50, fontSize: '24px' }}
        >
          {totalCounters}
        </span>
        Items
      </div>
    </nav>
  )
}

export default NavBar
