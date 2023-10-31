import React from 'react'
import log from '../images/log.png'

function User() {
  return (
    <div className='User'>
      <div className='logo'>
        <img src={log} alt='logo' />
      </div>
      <div className='info'>
        <p>Blessing Nwakwuo</p>
        <a href='www.g'>Logout</a>
      </div>
    </div>
  )
}

export default User