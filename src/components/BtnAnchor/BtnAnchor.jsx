import React from 'react'
import './btnAnchor.css'
import { Link as Anchor } from 'react-router-dom'

export default function BtnAnchor(props) {
  return (
    <div className='cont_btnAnchor'>
        <Anchor onClick={props.handleContact} className={`btnAnchor ${props.class}`} >{props.name}</Anchor>
    </div>
  )
}
