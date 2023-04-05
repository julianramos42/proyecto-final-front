import React from 'react'
import './RegisterFieldsets.css'
import profile from '../../images/profile.png'
import email from '../../images/@.png'
import lock from '../../images/lock.png'

export default function RegisterFieldsets() {
    return (
        <>
            <fieldset className='fieldset'>
                <legend>Name</legend>
                <div className='input-container'>
                    <input type='text' name='name' placeholder='Name' />
                    <img src={profile} alt='profile' />
                </div>
            </fieldset>

            <fieldset className='fieldset'>
                <legend>Last Name</legend>
                <div className='input-container'>
                    <input type='text' name='last_name' placeholder='Last Name' />
                    <img src={profile} alt='profile' />
                </div>
            </fieldset>

            <fieldset className='fieldset'>
                <legend>Email</legend>
                <div className='input-container'>
                    <input type='email' name='email' placeholder='email@gmail.com' />
                    <img src={email} alt='@' />
                </div>
            </fieldset>

            <fieldset className='fieldset'>
                <legend>Password</legend>
                <div className='input-container'>
                    <input type='password' name='password' placeholder='......................' />
                    <img src={lock} alt='lock' />
                </div>
            </fieldset>
        </>
    )
}
