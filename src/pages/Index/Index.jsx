import React from 'react'
import './Index.css'
import Auth from '../../components/Auth/Auth'
import modalActions from '../../store/ModalForm/actions.js'
import { useSelector, useDispatch } from 'react-redux'

const {renderModal} = modalActions

export default function Index() {
  let modalState = useSelector(store => store.modalFormReducer.state)
  
  const dispatch = useDispatch()

  function handleSignUp(){
    dispatch(renderModal({state: 'register'}))
  }

  function handleSignIn(){
    dispatch(renderModal({state: 'login'}))
  }

  return (
    <div className='home'>
      <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={handleSignIn}>Login</button>
      { modalState === 'register' ? <Auth /> : <></> }
      { modalState === 'login' ? <Auth /> : <></> }
    </div>
  )
}