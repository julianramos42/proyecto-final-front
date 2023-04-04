import React from 'react'
import './RegisterForm.css'
import register from '../../images/signup.png'
import RegisterFieldsets from '../RegisterFieldsets/RegisterFieldsets'
import SignBtn from '../SignBtn/SignBtn'
import { Link as Anchor } from 'react-router-dom'
import GoBackToHome from '../GoBackToHome/GoBackToHome'

export default function RegisterForm() {
  return (
    <form className='register-form'>
        <div className='register-img'>
            <img src={register} alt='register-img'/>
        </div>
        <div className='register-text'>
            <h2>Sign Up</h2>
            <RegisterFieldsets />
            <SignBtn text='Sign Up' />
            {/* ACA PONER BOTON GOOGLE */}
            <p>Already have an account? <Anchor className='link'>Log in</Anchor></p>
            <GoBackToHome />
        </div>
    </form>
  )
}