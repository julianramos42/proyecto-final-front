import React from 'react'
import HeaderHome from '../../components/HeaderHome/HeaderHome'
import BodyHome from '../../components/BodyHome/BodyHome'
import './Home.css'
import { useSelector } from 'react-redux'
import Auth from '../../components/Auth/Auth'

export default function Home() {
  let modalState = useSelector(store => store.modalFormReducer.state)

  return (
    <div className='home'>
      <HeaderHome />
      <BodyHome />
      {modalState === 'register' ? <Auth /> : <></>}
      {modalState === 'login' ? <Auth /> : <></>}
    </div>
  )
}
