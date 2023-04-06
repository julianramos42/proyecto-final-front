import React from 'react'
import './bodyHome.css'
import BtnAnchor from '../BtnAnchor/BtnAnchor'
import { useDispatch } from 'react-redux'
import refHomeActions from '../../store/RefHome/actions'
import { useState, useEffect } from 'react'
import { useRef } from 'react'

const {refHome} = refHomeActions

export default function BodyHome() {
  let HomeRef = useRef()

  const dispatch = useDispatch()

  useEffect( () => {
    dispatch(refHome({reference: HomeRef.current}))
  },[])

  return (
    <div className='Body_Home' ref={HomeRef}>
      <div className='infoHome'>
        <div className='cont_infoHome'>
          <h2 className='text1'>Finally, a modern</h2>
          <h2 className='text2'>Online store builder for anyone</h2>
          <h2 className='text1'>Easy. For cell phones. Open source.</h2>
        </div>
        <BtnAnchor to='/shops' name='See all stores' class='color_1' />
      </div>
    </div>
  )
}
