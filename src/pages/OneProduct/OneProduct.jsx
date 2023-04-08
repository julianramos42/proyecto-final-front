import React from 'react'
import './OneProduct.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import HeaderShop from '../../components/HeaderShop/HeaderShop'
import { Link as Anchor } from 'react-router-dom'
import { ArrowLeft } from '@mui/icons-material'

export default function OneProduct() {
  let [product, setProduct] = useState({})
  let [stock, setStock] = useState(1)

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
    getProduct()
  }, [productId])

  function handleLessStock() {
    if (stock !== 1) {
      setStock(stock - 1)
    }
  }

  function handleMoreStock() {
    if (stock !== product.stock) {
      setStock(stock + 1)
    }
  }

  return (
    <>
      <HeaderShop />
      <div className='product-Container'>
        <div className='product-Img'>
          <Anchor to={`/shop/${shopId}`} className='backToShops'>
            <ArrowLeft />
            <p>Back to Products</p>
          </Anchor>
          <img src={product.photo} />
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
            <a className='addToCart'>ADD TO CART</a>
          </div>
        </div>
      </div>
    </>
  )
}
