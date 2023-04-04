import React from 'react'
import './SignBtn.css'
import { Link as Anchor } from 'react-router-dom'

export default function SignBtn({text}) {
  return (
    <Anchor className='sign-btn'>{text}</Anchor>
  )
}