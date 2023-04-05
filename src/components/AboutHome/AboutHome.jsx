import React from 'react'
import './aboutHome.css'
import Diseño from '../../images/Diseño.jpg'
import BtnAnchor from '../BtnAnchor/BtnAnchor'

export default function AboutHome() {
  return (
    <div className='AboutHome'>

        <div className='cont-title'>
            <h2 className='title-about'>Meet me</h2>
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
