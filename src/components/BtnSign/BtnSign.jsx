import React from 'react'
import './btnSign.css'

export default function BtnSign(props) {
  return (
    <button className='btn_sign' onClick={props.onClick}>{props.name}</button>
  )
}
