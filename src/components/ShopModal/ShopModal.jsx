import React, { useEffect } from 'react'
import './ShopModal.css'
import { useState } from 'react';
import ShopModalActions from '../../store/ShopModal/actions'
import { useDispatch } from 'react-redux'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import x from '../../images/Union.png'
import toast, { Toaster } from 'react-hot-toast';

const { renderModal } = ShopModalActions

export default function ShopModal() {
    let shopId = useParams().shopId
    const dispatch = useDispatch()
    let [stock, setStock] = useState(0)
    let [products, setProducts] = useState([])

    function handleLessStock() {
        if (stock !== 1) {
            setStock(stock - 1)
        }
    }

    function handleMoreStock() {
        if (stock !== 3) {
            setStock(stock + 1)
        }
    }

    function closeModal() {
        dispatch(renderModal({ state: false }))
    }

    let token = localStorage.getItem('token')
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }

    async function getProducts() {
        try {
            let url = `http://localhost:8080/shop/${shopId}/cart`

            await axios.get(url, headers).then(res => setProducts(res.data.products))
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getProducts()
    })

    async function deleteOne(e) {
        try {
            let productId = e.target.id
            let url = `http://localhost:8080/shop/cart/deleteone/${productId}`
            await axios.delete(url, headers).then(res => toast.success(res.data.message))
        } catch (error) {
            if (error.code === "ERR_NETWORK") {
                toast.error('Network Error')
            } else {
                if (typeof error.response.data.message === 'string') {
                    toast.error(error.response.data.message)
                } else {
                    error.response.data.message.forEach(err => toast.error(err))
                }
            }
        }
    }

    async function deleteAll() {
        try {
            let url = `http://localhost:8080/shop/${shopId}/cart/deleteall`
            await axios.delete(url, headers).then(res => toast.success(res.data.message))
        } catch (error) {
            if (error.code === "ERR_NETWORK") {
                toast.error('Network Error')
            } else {
                if (typeof error.response.data.message === 'string') {
                    toast.error(error.response.data.message)
                } else {
                    error.response.data.message.forEach(err => toast.error(err))
                }
            }
        }
    }

    return (
        <div className='shopModal'>
            <div className='shopModalContainer'>
                <div className='modalTop'>
                    <h3>Cart ({products.length})</h3>
                    <img src={x} onClick={closeModal} className='close-x' />
                </div>
                <hr />
                <div className='modalContent'>
                    {
                        products.length ?
                            products?.map((product, i) => {
                                let card = <section className='modalCard' key={i}>
                                    <img className='imgProduct' src={product.photo} alt={product?.name} />
                                    <section className='detailsProduct'>
                                        <h3>{product.category}</h3>
                                        <h2>{product.name}</h2>
                                        <p>${product.price}</p>
                                        <div className='btnStock'>
                                            <button onClick={handleLessStock}>-</button>
                                            <p>{product.stock}</p>
                                            <button onClick={handleMoreStock}>+</button>
                                        </div>
                                    </section>
                                    <section className='descriptionProduct'>
                                        <div>
                                            <h3>DESCRIPTION</h3>
                                            <img src={x} id={product._id} onClick={deleteOne} className='close-x' />
                                        </div>
                                        <p>{product.description}</p>
                                    </section>
                                </section>
                                return card
                            })
                            : 
                            <div style={{height:'100%', display: 'flex', 'justifyContent': 'center', 'alignItems': 'center'}}>
                                <h2 style={{'text-align': 'center'}}>No products in cart</h2>
                            </div>
                    }
                </div>
                <div className='modalBtns'>
                    <p className='buyCart'>BUY CART</p>
                    <p className='deleteCart' onClick={deleteAll}>CLEAR CART</p>
                </div>
            </div>
            <Toaster position='top-right' />
        </div>
    )
}