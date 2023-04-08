import React from 'react'
import './HeaderShop.css'
import bag from '../../images/bag.png'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ShopModalActions from '../../store/ShopModal/actions'
import { useDispatch } from 'react-redux'

const {renderModal} = ShopModalActions


export default function HeaderShop() {
    const dispatch = useDispatch()
    let [shop, setShop] = useState({})
    let shopId = useParams().shopId

    let banner = {
        'background': `rgba(0, 0, 0, 0.5) url(${shop.banner})`,
    }

    let shopUrl = `http://localhost:8080/shop/${shopId}`
    async function getShop() {
        try {
            await axios.get(shopUrl).then(res => setShop(res.data.shop))
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getShop()
    }, [shopId])

    function openModal(){
        dispatch(renderModal({state: true}))
    }


    return (
        <div className='topShop' style={banner}>
            <nav className='navShop'>
                <img className='logoShop' src={shop.photo} alt='logo' />
                <div className='anchorsShop'>
                    <a>Home</a>
                    <a className='active'>Shop</a>
                    <a>Blog</a>
                </div>
                <img onClick={openModal} className='bagShop' src={bag} alt='bag' />
            </nav>
            {/* <div className='searchShop'>
                    <h2>Shop</h2>
                    <div className='containerInput'>
                        <img src={loupe}/>
                        <input type='text' placeholder='Find your product'/>
                    </div>
                </div> */}
        </div>
    )
}
