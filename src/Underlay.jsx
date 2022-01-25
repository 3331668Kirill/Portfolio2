import './styles.css'
import { NavLink } from 'react-router-dom'
import React from 'react'

export default function Underlay() {
  return (
    <>
      <div className='nav'>
        <NavLink className='a' to={'/'}>Home</NavLink>
        <NavLink className='a' to={'/projects'}>Projects</NavLink>
        <NavLink className='a' to={'/contacts'}>Contacts</NavLink>

      </div>
      <div className='underlay'>
        I am open to work
      </div>
    </>
  )
}