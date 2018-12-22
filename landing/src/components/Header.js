import React from 'react'

import logo from '../assets/images/Accountable.png'

const style = {
  borderRadius: '50%',
  height: '160px',
}
const Header = props => (
  <header id="header" className="alt">
    <span className="logo">
      <img src={logo} alt="logo" style={style} />
    </span>
    <h1>A to-do list that keeps you on track</h1>
    <p>
      <br />
    </p>
  </header>
)

export default Header
