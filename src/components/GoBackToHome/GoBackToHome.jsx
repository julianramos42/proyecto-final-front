import React from 'react'
import './goBackToHome.css'
import { Link as Anchor } from 'react-router-dom'

export default function GoBackToHome() {
  return (
    <p>Go back to <Anchor to='/' className='link'>home page</Anchor></p>
  )
}
