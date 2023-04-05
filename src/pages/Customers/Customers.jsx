import React from 'react'
import "./customers.css"

export default function Customers() {
  return (
    <div className='customers'>
      <div className='cont-title-customers'>
          <h2>Satisfied customers</h2>
      </div>

      <div className='cont-names'>
        <div className='carta-names'>
            <div className='img1'>

            </div>

            <div className='cont-textos'>
                <h3 className='name'>Jaime Foldón</h3>
                <p className='coment'>I loved the experience of shopping at Lance's online store. From the moment I entered his website, I was able to easily navigate through the different categories and find what I was looking for.</p>
                <div>
                  <img className='estrella' src="./Vector.png" alt="" />
                  <img className='estrella' src="./Vector.png" alt="" />
                  <img className='estrella' src="./Vector.png" alt="" />
                  <img className='estrella' src="./Vector.png" alt="" />
                  <img className='estrella' src="./Vector.png" alt="" />
                </div>
                
            </div>
        </div>

        <div className='carta-names'>
            <div className='img2'>

            </div>

            <div className='cont-textos'>
                <h3 className='name'>Aleja Amigo</h3>
                <p className='coment'>I highly recommend Lance's online store. It is easy to use, intuitive, and has a wide variety of high-quality products. Also, I love that they offer free shipping on orders over a certain amount.</p>
                <div>
                  <img className='estrella' src="./Vector.png" alt="" />
                  <img className='estrella' src="./Vector.png" alt="" />
                  <img className='estrella' src="./Vector.png" alt="" />
                  <img className='estrella' src="./Vector.png" alt="" />
                  <img className='estrella' src="./Vector.png" alt="" />
                </div>
            </div>
        </div>

        <div className='carta-names'>
            <div className='img3'>

            </div>

            <div className='cont-textos'>
                <h3 className='name'>Antonio Garrete</h3>
                <p className='coment'>Lance's app is awesome! From the visually appealing design to the ease of navigation. Also, the range of products available was impressive and I was able to find exactly what I was looking for.</p>
                <div>
                  <img className='estrella' src="./Vector.png" alt="" />
                  <img className='estrella' src="./Vector.png" alt="" />
                  <img className='estrella' src="./Vector.png" alt="" />
                  <img className='estrella' src="./Vector.png" alt="" />
                  <img className='estrella' src="./Vector.png" alt="" />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
