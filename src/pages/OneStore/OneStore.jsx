import React, { useEffect, useState } from 'react'
import './OneStore.css'
import loupe from '../../images/loupe.png'
import arrowDown from '../../images/arrowdown.png'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link as Anchor } from 'react-router-dom'
import HeaderShop from '../../components/HeaderShop/HeaderShop'
import { ArrowLeft } from '../../components/Icons/Icons'

export default function OneStore() {
    let [products, setProducts] = useState([])
    let [shop, setShop] = useState({})
    let shopId = useParams().shopId

    let productsUrl = `http://localhost:8080/shop/${shopId}/products`
    async function getProducts() {
        try {
            await axios.get(productsUrl).then(res => setProducts(res.data.products))
        } catch (err) {
            console.log(err)
        }
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
        getProducts()
        getShop()
    }, [shopId])

    return (
        <>
            <HeaderShop />
            <div className='productsContainer'>
                <div className='firtsFilterContainer'>
                    <Anchor to='/shops' className='backToShops'>
                            <ArrowLeft />
                            <p>Back to Shops</p>
                    </Anchor>
                    <div className='sortContainer'>
                        <p>Sort</p>
                        <img src={arrowDown} alt='arrow down' />
                    </div>
                </div>
                <hr />
                <div className='secondFilterContainer'>

                    <div className='categoriesFilter'>
                        <div className='searchFilter'>
                            <div className='containerInput'>
                                <label htmlFor='search'><img src={loupe} alt='loupe' /></label>
                                <input type='text' id='search' placeholder='Find your product' />
                            </div>
                        </div>
                        <hr />
                        <h3>Categories</h3>
                        <h4 className='active'>Suculentas</h4>
                        <h4>Trepadoras</h4>
                        <h4>Cactus</h4>
                        <h4>Arbol</h4>
                        <h4>Acuatica</h4>
                        <h4>Carnivora</h4>
                        <hr />
                    </div>
                    <div className='displayedProducts'>
                        {
                            products?.map((product, i) => {
                                let card = <Anchor to={`/shop/${shop._id}/product/${product._id}`} key={i}>
                                    <section id={product._id} className='productCard' >
                                        <img src={product.photo} alt='product' />
                                        <h3>{product.name}</h3>
                                        <p>${product.price}</p>
                                    </section>
                                </Anchor>
                                return card
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}