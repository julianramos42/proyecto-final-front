import React from 'react'
import './ShopModal.css'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import imgProduct from '../../images/imgProducto.png'
import { useState } from 'react';
import ShopModalActions from '../../store/ShopModal/actions'
import { useDispatch } from 'react-redux'

const {renderModal} = ShopModalActions

export default function ShopModal() {
    const dispatch = useDispatch()
    let [stock, setStock] = useState(1)

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

    function closeModal(){
        dispatch(renderModal({state: false}))
    }

    return (
        <div className='shopModal'>
            <div className='shopModalContainer'>
                <div className='modalTop'>
                    <h3>Cart (0)</h3>
                    <CloseRoundedIcon className='close-x' onClick={closeModal} />
                </div>
                <hr />
                <div className='modalContent'>
                    <section className='modalCard'>
                        <img className='imgProduct' src={imgProduct} />
                        <section className='detailsProduct'>
                            <h3>Category</h3>
                            <h2>Monstera Deliciosa</h2>
                            <p>$89</p>
                            <div className='btnStock'>
                                <button onClick={handleLessStock}>-</button>
                                <p>{stock}</p>
                                <button onClick={handleMoreStock}>+</button>
                            </div>
                        </section>
                        <section className='descriptionProduct'>
                            <div>
                                <h3>DESCRIPTION</h3>
                                <CloseRoundedIcon className='close-x' />
                            </div>
                            <p>LOREM ASDADSA DASD ADSAD ADASD ASDASDASDASDASDA DSADSADAS DASDASDAS DSA A A SAA DASDAS </p>
                        </section>
                    </section>

                    <section className='modalCard'>
                        <img className='imgProduct' src={imgProduct} />
                        <section className='detailsProduct'>
                            <h3>Category</h3>
                            <h2>Monstera Deliciosa</h2>
                            <p>$89</p>
                            <div className='btnStock'>
                                <button onClick={handleLessStock}>-</button>
                                <p>{stock}</p>
                                <button onClick={handleMoreStock}>+</button>
                            </div>
                        </section>
                        <section className='descriptionProduct'>
                            <div>
                                <h3>DESCRIPTION</h3>
                                <CloseRoundedIcon className='close-x' />
                            </div>
                            <p>LOREM ASDADSA DASD ADSAD ADASD ASDASDASDASDASDA DSADSADAS DASDASDAS DSA A A SAA DASDAS </p>
                        </section>
                    </section>

                    <section className='modalCard'>
                        <img className='imgProduct' src={imgProduct} />
                        <section className='detailsProduct'>
                            <h3>Category</h3>
                            <h2>Monstera Deliciosa</h2>
                            <p>$89</p>
                            <div className='btnStock'>
                                <button onClick={handleLessStock}>-</button>
                                <p>{stock}</p>
                                <button onClick={handleMoreStock}>+</button>
                            </div>
                        </section>
                        <section className='descriptionProduct'>
                            <div>
                                <h3>DESCRIPTION</h3>
                                <CloseRoundedIcon className='close-x' />
                            </div>
                            <p>LOREM ASDADSA DASD ADSAD ADASD ASDASDASDASDASDA DSADSADAS DASDASDAS DSA A A SAA DASDAS </p>
                        </section>
                    </section>
                </div>
                <div className='modalBtns'>
                    <p className='buyCart'>BUY CART</p>
                    <p className='deleteCart'>DELETE CART</p>
                </div>
            </div>
        </div>
    )
}