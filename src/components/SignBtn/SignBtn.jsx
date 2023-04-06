import React from 'react'
import './SignBtn.css'

export default function SignBtn({text}) {
  return (
    <input type='submit' className='sign-btn' value={text}/>
  )
}