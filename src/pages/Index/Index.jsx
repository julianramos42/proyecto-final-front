import React from 'react'
import Home from '../Home/Home'
import About from '../About/About'

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
    <>
        <Home/>
        <About/>
    </>
  )
}
