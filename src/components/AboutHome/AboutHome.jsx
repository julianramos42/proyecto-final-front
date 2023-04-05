import React, { useEffect } from 'react'
import './aboutHome.css'
import Diseño from '../../images/Diseño.jpg'
import BtnAnchor from '../BtnAnchor/BtnAnchor'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import refAboutActions from '../../store/RefAbout/actions'

const {refAbout} = refAboutActions

export default function AboutHome() {
  let AboutRef = useRef()

  const dispatch = useDispatch()

  useEffect( () => {
    dispatch(refAbout({reference: AboutRef}))
  },[])

  return (
    <div className='AboutHome' ref={AboutRef}>

        <div className='cont-title'>
            <h2 className='title-about' id='about'>Meet me</h2>
            <img className='img-about' src={Diseño} alt="" />
        </div>
        <div className='cont-infoAbout'>
            <div className='cont-text'>
                <h2 className='text_about'>Editing everything online gives you a sense of control that you haven't felt with any other tool.</h2>
            </div>
            <BtnAnchor name='Contact us now' class='color_2'/>
        </div>
        
    </div>
  )
}
