import React from 'react'
import HeaderHome from '../../components/HeaderHome/HeaderHome'
import BodyHome from '../../components/BodyHome/BodyHome'
import './home.css'

export default function Home() {
  return (
    <div className='home'>
        <HeaderHome/>
        <BodyHome/>
    </div>      
  )
}
