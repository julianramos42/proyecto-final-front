import React from 'react'
import './OneProduct.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import HeaderShop from '../../components/HeaderShop/HeaderShop'
import { Link as Anchor } from 'react-router-dom'
// import { ArrowLeft } from '@mui/icons-material'
import toast, { Toaster } from 'react-hot-toast'

export default function OneProduct() {
  let [product, setProduct] = useState({})
  let [stock, setStock] = useState(0)
  let [maxStock, setMaxStock] = useState(1)

  let shopId = useParams().shopId
  let productId = useParams().productId

  let productUrl = `http://localhost:8080/product/${productId}`
  async function getProduct() {
    try {
      await axios.get(productUrl).then(res => setProduct(res.data.product))
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    setMaxStock(product.stock)
  }, [product])

  useEffect(() => {
    getProduct()
  }, [productId])

  function handleLessStock() {
    if (stock !== 0) {
      setStock(stock - 1)
      product.stock++
    }
  }

  function handleMoreStock() {
    if (stock !== maxStock) {
      setStock(stock + 1)
      product.stock--
    }
  }

  async function handleCart() {
    try {
      if (stock !== 0) {
        let url = `http://localhost:8080/shop/${shopId}/createcartproduct`
        let token = localStorage.getItem('token')
        let headers = { headers: { 'Authorization': `Bearer ${token}` } }
        let data = {
          ...product,
          maxStock: maxStock
        }
        data.stock = stock
        axios.post(url, data, headers).then(res => {
          toast.success(res.data.message)
          setStock(0)
          setMaxStock(product.stock)
        })
      }else{
        toast.error('The stock cannot be 0')
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

  return (
    <>
      <HeaderShop />
      <div className='product-Container'>
        <div className='product-Img'>
          <Anchor to={`/shop/${shopId}`} className='backToShops'>
            {/* <ArrowLeft /> */}
            <p>Back to Products</p>
          </Anchor>
          <img src={product.photo} alt={product?.name} />
        </div>
        <div className='product-Info'>
          <section className='product-Important'>
            <h3>{product.category}</h3>
            <h2>{product.name}</h2>
            <p>${product.price}</p>
          </section>
          <hr />
          <div className='product-Description'>
            <div className='btnStock'>
              <button onClick={handleLessStock}>-</button>
              <p>{stock}</p>
              <button onClick={handleMoreStock}>+</button>
            </div>
            <p className='stockText'>Only {product.stock} items in stock</p>
            <p className='description-title'>Description</p>
            <p className='description-text'>{product.description}</p>
            <button className='addToCart' onClick={handleCart}>ADD TO CART</button>
          </div>
        </div>
      </div>
      <Toaster
        position="top-right"
      />
    </>
  )
}
