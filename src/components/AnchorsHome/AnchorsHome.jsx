import React from 'react'
import { Link as Anchor } from 'react-router-dom'
import './anchorsHome.css'

export default function AnchorsHome(props) {
  return (
    <Anchor className={props.class} onClick={props.onClick}>{props.name}</Anchor>
  )
}
