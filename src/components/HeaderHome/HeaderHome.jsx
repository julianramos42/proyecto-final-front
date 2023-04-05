import React, { useState } from 'react';
import axios from 'axios';
import { Link as Anchor, useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import './headerHome.css';
import AnchorsHome from '../AnchorsHome/AnchorsHome';
import BtnSign from '../BtnSign/BtnSign';
import BtnLogo from '../../images/Menu.png'
import BtnClose from '../../images/Union.png'
import UserImage from '../../images/user.jpg'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import LiveHelpRoundedIcon from '@mui/icons-material/LiveHelpRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import modalActions from '../../store/ModalForm/actions.js'

const { renderModal } = modalActions

export default function HeaderHome() {
  const [activeButton, setActiveButton] = useState('Home');

  function handleSignIn() {
    dispatch(renderModal({ state: 'login' }))
  }
  function handleSignUp() {
    dispatch(renderModal({ state: 'register' }))
  }

  function handleSignInModal() {
    dispatch(renderModal({ state: 'login' }))
    setIsOpen(!isOpen)
  }
  function handleSignUpModal() {
    dispatch(renderModal({ state: 'register' }))
    setIsOpen(!isOpen)
  }

  // Navbar
  const dispatch = useDispatch()
  let navigate = useNavigate()

  const [isOpen, setIsOpen] = useState(true)
  let url = 'http://localhost:8080/auth/signout'
  let token = localStorage.getItem('token')
  let headers = { headers: { 'Authorization': `Bearer ${token}` } }

  async function handleSignOut() {
    try {
      await axios.post(url, null, headers).then(res =>
        localStorage.setItem('token', ''));
      localStorage.setItem('user', JSON.stringify({
        // id:'',
        admin: '',
        name: '',
        photo: '',
        seller: ''
      }))
      setIsOpen(!isOpen)
      toast.success('The session was closed successfully!')
      setTimeout(() => {
        navigate('/')
      }, 500)
    } catch (error) {
      toast.error("You're already signed out or not signed in")
    }
  }



  if (!token) {
    localStorage.setItem('user', JSON.stringify({
      // id:'',
      admin: '',
      name: '',
      photo: '',
      seller: ''
    }))
  }

  let user = JSON.parse(localStorage.getItem('user'));
  let name = user.name
  let photo = user.photo

  let AboutRef = useSelector(store => store.refAboutReducer.reference)
  
  function handleAboutUs(){
    setActiveButton('About Us')
    AboutRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <div className='Header_Home'>
        <div>
          <img className='logo' src="https://i.imgur.com/iSp1sxK.png" alt="logo" />
        </div>
        <div className='cont_headerHome'>
          <AnchorsHome name='Home' class={activeButton === 'Home' ? 'btn_nav active' : 'btn_nav'} onClick={() => setActiveButton('Home')} />
          <Anchor className={activeButton === 'About Us' ? 'btn_nav active' : 'btn_nav'} onClick={handleAboutUs}>About Us</Anchor>
          {/* <AnchorsHome to='about' name='About Us' class={activeButton === 'About Us' ? 'btn_nav active' : 'btn_nav'} onClick={() => setActiveButton('About Us')}/> */}
          <AnchorsHome name='Stores' class={activeButton === 'Stores' ? 'btn_nav active' : 'btn_nav'} onClick={() => setActiveButton('Stores')} />
          <AnchorsHome name='Stories' class={activeButton === 'Stories' ? 'btn_nav active' : 'btn_nav'} onClick={() => setActiveButton('Stories')} />
          <AnchorsHome name='Contact' class={activeButton === 'Contact' ? 'btn_nav active' : 'btn_nav'} onClick={() => setActiveButton('Contact')} />
        </div>
        <div className='cont_BtnSing'>
          <BtnSign name='Login' onClick={handleSignIn} />
          <BtnSign name='Register' onClick={handleSignUp} />
        </div>
      </div>
      <div className='header-container'>
        <div className="nav-toggler">
          <img src={BtnLogo} alt="logo" className='logo' onClick={() => setIsOpen(!isOpen)} />
        </div>

        <div className={`nav ${isOpen && "open"}`}>
          <div className="nav-top">
            <div className='nav-close-btn'>
              <button onClick={() => setIsOpen(!isOpen)}><img src={BtnClose} alt="logo" className="logo" /></button>
            </div>
            <div className='nav-user'>
              <img src={photo ? photo : UserImage} alt="userimage" />
            </div>
            <div className='user-info'>
              <p className='username'>{name ? name : 'Username'}</p>
              <div className='cont_foll'>
                <p className='foll'>{'280 Followers'}</p>
                <PeopleAltRoundedIcon />
              </div>
            </div>
          </div>
          <div className='cont_route'>
            <div className='nav-btn'>
              <Anchor className='a-btn' >
                <HomeRoundedIcon />
                Home
              </Anchor>
            </div>
            <div className='nav-btn'>
              <Anchor className='a-btn' >
                <ShoppingBagRoundedIcon />
                Stores
              </Anchor>
            </div>
            <div className='nav-btn'>
              <Anchor className='a-btn' onClick={handleSignUpModal}>
                <PersonAddAltRoundedIcon />
                Register
              </Anchor>
            </div>
            <div className='nav-btn'>
              <Anchor className='a-btn' onClick={handleSignInModal}>
                <PersonRoundedIcon />
                Login
              </Anchor>
            </div>
          </div>
          <div className='cont_footNav'>
            <div className='nav-btn'>
              <Anchor className='a-btn' >
                <LiveHelpRoundedIcon />
                Help
              </Anchor>
            </div>
            <div className='nav-btn'>
              <Anchor className='a-btn' onClick={handleSignOut}>
                <ExitToAppRoundedIcon />
                Logout
              </Anchor>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}