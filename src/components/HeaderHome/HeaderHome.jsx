import React, { useState } from 'react';
import './headerHome.css';
import AnchorsHome from '../AnchorsHome/AnchorsHome';
import BtnSign from '../BtnSign/BtnSign';

export default function HeaderHome() {
  const [activeButton, setActiveButton] = useState('Home');

  function handleLogin(){
    console.log('aqui va el login');
  }
  function handleSignin(){
    console.log('aqui va el signin');
  }
  return (
    <div className='Header_Home'>
      <div>
        <img className='logo' src="https://i.imgur.com/iSp1sxK.png" alt="logo" />
      </div>
      <div className='cont_headerHome'>
        <AnchorsHome name='Home' class={activeButton === 'Home' ? 'btn_nav active' : 'btn_nav'} onClick={() => setActiveButton('Home')}/>
        <AnchorsHome name='About Us' class={activeButton === 'About Us' ? 'btn_nav active' : 'btn_nav'} onClick={() => setActiveButton('About Us')}/>
        <AnchorsHome name='Stores' class={activeButton === 'Stores' ? 'btn_nav active' : 'btn_nav'} onClick={() => setActiveButton('Stores')}/>
        <AnchorsHome name='Customer Stories' class={activeButton === 'Customer Stories' ? 'btn_nav active' : 'btn_nav'} onClick={() => setActiveButton('Customer Stories')}/>
        <AnchorsHome name='Contact' class={activeButton === 'Contact' ? 'btn_nav active' : 'btn_nav'} onClick={() => setActiveButton('Contact')}/>
      </div>
      <div className='cont_BtnSing'>
        <BtnSign name='Log in' onClick={handleLogin}/>
        <BtnSign name='Sign in' onClick={handleSignin}/>
      </div>
    </div>
  );
}