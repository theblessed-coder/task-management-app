import React from 'react'
import logo from '../images/logo.png'

function User() {
  return (
    <div className='User'>
      <div className='logo'>
        <img src={logo} alt='logo' />
      </div>
      <div className='info'>
        <p>Blessing Nwakwuo</p>
        <a href='www.g'>Logout</a>
      </div>
    </div>
  )
}

export default User