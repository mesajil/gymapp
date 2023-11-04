import React from 'react'
import Logo from '../Logo'
import Navbar from './Navbar'
import Navbar2 from './Navbar2'

export default function Header() {
  return (
    <div>
      <Logo />
      <Navbar></Navbar>
      <Navbar2></Navbar2>
    </div>
  )
}
