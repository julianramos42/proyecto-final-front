import React, { useEffect, useState } from 'react'
import './OneStore.css'
import loupe from '../../images/loupe.png'
import arrowDown from '../../images/arrowdown.png'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link as Anchor } from 'react-router-dom'
import HeaderShop from '../../components/HeaderShop/HeaderShop'
import { ArrowLeft } from '../../components/Icons/Icons'
import { useRef } from 'react'
import toast, { Toaster } from 'react-hot-toast'

export default function OneStore() {
    let params = new URLSearchParams(window.location.search)
    let payment_id = params.get('payment_id')
    let status = params.get('status')
    let [products, setProducts] = useState([])
    let [cartProducts, setCartProducts] = useState([])
    let [cartPrice, setCartPrice] = useState(0)
    let [shop, setShop] = useState({})
    let shopId = useParams().shopId
    let search = useRef()
    let [category, setCategory] = useState('')
    let [sort, setSort] = useState(1)
    let user = JSON.parse(localStorage.getItem('user'))
    let token = localStorage.getItem('token')
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }

    useEffect(() => {
        let template = 0
        cartProducts.forEach(cartProduct => {
            template += cartProduct.unit_price
        })
        setCartPrice(template)
    }, [])

    useEffect(() => {
        if (status === 'approved' && cartProducts.length) {
            toast.success(`Thanks for buying from us ${user.name}`) // esto tiene que ser un modal
            handlePayment()
        }
    }, [cartProducts])

    async function handlePayment() {
        try {
            let url = `http://localhost:8080/payment/${shopId}`
            let data = {
                "payment_id": payment_id,
                "totalValue": cartPrice,
                "products": cartProducts
            }
            await axios.post(url, data, headers).then(res => {
                updateProducts()
            })
        } catch (err) {
            console.log(err)
        }
    }

    function updateProducts() {
        try {
            if (status === 'approved' && cartProducts.length) {
                cartProducts.forEach(cartProduct => {
                    products.forEach(product => {
                        if (product.name == cartProduct.title) {
                            let url = `http://localhost:8080/product/update/${product._id}`
                            let data = {
                                name: product.name,
                                price: product.price,
                                photo: product.photo,
                                stock: product.stock,
                                category: product.category,
                                description: product.description
                            }
                            data.stock -= cartProduct.quantity
                            axios.put(url, data, headers)
                        }
                    })
                })
                deleteAll()
            }
        } catch (err) {
            console.log(err)
        }
    }

    async function deleteAll() {
        try {
            if (status === 'approved' && cartProducts.length) {
                let url = `http://localhost:8080/shop/${shopId}/cart/deleteall`
                await axios.delete(url, headers).then(res => {
                    setTimeout(() => {
                        window.location = `http://localhost:3000/shop/${shopId}`
                    }, 6000)
                })
            }
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

    function handleSort() {
        if (sort === 1) {
            setSort(-1)
        }
        if (sort === -1) {
            setSort(1)
        }
    }

    async function getProducts() {
        let productsUrl = `http://localhost:8080/shop/${shopId}/products?name=${search.current.value}&category=${category}&sort=${sort}`
        try {
            await axios.get(productsUrl).then(res => setProducts(res.data.products))
        } catch (err) {
            console.log(err)
        }
    }

    async function getCartProducts() {
        try {
            let url = `http://localhost:8080/shop/${shopId}/cart`
            await axios.get(url, headers).then(res => {
                setCartProducts(res.data.products)
            })
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
        getShop()
        getProducts()
        getCartProducts()
    }, [shopId])

    useEffect(() => {
        getProducts()
    }, [sort,category])

    function handleOptionChange(e){
        setCategory(e.target.value)
    }

    return (
        <>
            <HeaderShop />
            <div className='productsContainer'>
                <div className='firtsFilterContainer'>
                    <Anchor to='/shops' className='backToShops'>
                        <ArrowLeft />
                        <p>Back to Shops</p>
                    </Anchor>
                    <div className='sortContainer' onClick={handleSort}>
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
                                <input ref={search} onChange={getProducts} type='text' id='search' placeholder='Find your product' />
                            </div>
                        </div>
                        <hr />
                        <h3>Categories</h3>
                        <select onChange={handleOptionChange}>
                            <option value="">All</option>
                            <option value='trepadora'>Trepadoras</option>
                            <option value='cactus'>Cactus</option>
                            <option value='arbol'>Arbol</option>
                            <option value='acuatica'>Acuatica</option>
                            <option value='carnivora'>Carnivora</option>
                        </select>
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
            <Toaster position='top-right' />
        </>
    )
}