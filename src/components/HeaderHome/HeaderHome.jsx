import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Link as Anchor, useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { useSelector,useDispatch } from 'react-redux'
import './headerHome.css';
import AnchorsHome from '../AnchorsHome/AnchorsHome';
import BtnSign from '../BtnSign/BtnSign';
import BtnLogo from '../../images/Menu.png'
import BtnClose from '../../images/Union.png'

export default function HeaderHome() {
  const [activeButton, setActiveButton] = useState('Home');

  function handleLogin(){
    console.log('aqui va el login');
  }
  function handleSignin(){
    console.log('aqui va el signin');
  }

  // Navbar
  const dispatch = useDispatch()
    let navigate = useNavigate()
    
    const [isOpen, setIsOpen] = useState(true)
    // let url = apiUrl + 'auth/token'
    // let token = localStorage.getItem('token')
    // let headers = { headers: { 'Authorization': `Bearer ${token}` } }

    // async function handleSignOut() {
    //     try {
    //         await axios.post(url, null, headers).then(res =>
    //             localStorage.setItem('token', ''));
    //         localStorage.setItem('user', JSON.stringify({
    //             name: '',
    //             mail: '',
    //             photo: ''
    //         }))
    //         setIsOpen(!isOpen)
    //         toast.success('The session was closed successfully!')
    //         setTimeout(()=>{
    //             navigate('/')
    //         },500)
    //     } catch (error) {
    //         toast.error("You're already signed out or not signed in")
    //     }
    // }



    // if (!token) {
    //     localStorage.setItem('user', JSON.stringify({
    //         name: '',
    //         mail: '',
    //         photo: ''
    //     }))
    // }

    // let user = JSON.parse(localStorage.getItem('user'));
    // let name = user.name
    // let mail = user.mail
    // let photo = user.photo

    
  return (
    <>
    <div className='Header_Home'>
      <div>
        <img className='logo' src="https://i.imgur.com/iSp1sxK.png" alt="logo" />
      </div>
      <div className='cont_headerHome'>
        <AnchorsHome name='Home' class={activeButton === 'Home' ? 'btn_nav active' : 'btn_nav'} onClick={() => setActiveButton('Home')}/>
        <AnchorsHome name='About Us' class={activeButton === 'About Us' ? 'btn_nav active' : 'btn_nav'} onClick={() => setActiveButton('About Us')}/>
        <AnchorsHome name='Stores' class={activeButton === 'Stores' ? 'btn_nav active' : 'btn_nav'} onClick={() => setActiveButton('Stores')}/>
        <AnchorsHome name='Stories' class={activeButton === 'Stories' ? 'btn_nav active' : 'btn_nav'} onClick={() => setActiveButton('Stories')}/>
        <AnchorsHome name='Contact' class={activeButton === 'Contact' ? 'btn_nav active' : 'btn_nav'} onClick={() => setActiveButton('Contact')}/>
      </div>
      <div className='cont_BtnSing'>
        <BtnSign name='Log in' onClick={handleLogin}/>
        <BtnSign name='Sign in' onClick={handleSignin}/>
      </div>
    </div>
    <div className='header-container'>
            <div className="nav-toggler">
                <img src={BtnLogo} alt="logo" className='logo' onClick={() => setIsOpen(!isOpen)} />
            </div>

            <div className={`nav ${isOpen && "open"}`}>
                <div className="nav-top">
                    <div className='nav-user'>
                        {/* <img src={photo ? photo : UserImage} alt="userimage" /> */}
                        <div className='user-info'>
                            {/* <p className='username'>{name ? name : 'Username'}</p>
                            <p className='email'>{mail ? mail : 'User Mail'}</p> */}
                            <p className='username'>{'Username'}</p>
                            <p className='email'>{'User Mail'}</p>
                        </div>
                    </div>

                    <div className='nav-close-btn'>
                        <button onClick={() => setIsOpen(!isOpen)}><img src={BtnClose} alt="logo" className="logo" /></button>
                    </div>
                </div>
        
                <Anchor className='nav-btn' >Home</Anchor>
                 <Anchor className='nav-btn' >Stores</Anchor> 
                 <Anchor className='nav-btn' >Sign in</Anchor>
                : <Anchor className='nav-btn' >Log in</Anchor>
                {/* {token ? <Anchor className='nav-btn' onClick={handleSignOut}>Logout</Anchor> : ''} */}
            </div>

            {/* <img src={Logo} alt="logo" className="logo-1" />
            <img src={LogoMin} alt="logo" className="logo-min" /> */}
        </div>
    </>
  );
}