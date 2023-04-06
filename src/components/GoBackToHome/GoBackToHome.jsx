import React from 'react'
import './goBackToHome.css'
import { Link as Anchor } from 'react-router-dom'
import modalActions from '../../store/ModalForm/actions.js'
import { useDispatch } from 'react-redux'

const {renderModal} = modalActions

export default function GoBackToHome() {
  const dispatch = useDispatch()

  function closeModal(){
        dispatch(renderModal({state: ''}))
    }

  return (
    <p>Go back to <Anchor className='link' onClick={closeModal}>home page</Anchor></p>
  )
}
