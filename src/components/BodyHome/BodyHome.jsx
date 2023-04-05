import React from 'react'
import './bodyHome.css'
import BtnAnchor from '../BtnAnchor/BtnAnchor'

export default function BodyHome() {
  return (
    <div className='Body_Home'>
        <div className='cont_infoHome'>
            <h2 className='text1'>Finally, a modern</h2>
            <h2 className='text2'>Online store builder for anyone</h2>
            <h2 className='text1'>Easy. For cell phones. Open source.</h2>
        </div>
        <BtnAnchor name='Create your online store' class='color_1'/>
    </div>
  )
}
