import React from 'react'
import './Auth.css'
import RegisterForm from '../RegisterForm/RegisterForm'
import LoginForm from '../LoginForm/LoginForm'
import { useSelector } from 'react-redux'

export default function Auth() {
  let modalState = useSelector(store => store.modalFormReducer.state)

  return (
    <div className='auth-modal'>
      {modalState === 'register' ? <RegisterForm /> : <></>}
      {modalState === 'login' ? <LoginForm /> : <></>}
    </div>
  )
}
