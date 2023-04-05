import React, { useEffect, useState } from "react";
import "./customers.css";
import persona1 from "../../images/persona11.png"
import persona2 from "../../images/persona21.png"
import persona3 from "../../images/persona31.png"
import { useRef } from "react";
import { useDispatch } from "react-redux";
import refCustomersActions from '../../store/RefCustomers/actions'

const { refCustomers } = refCustomersActions

export default function Customers() {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleNext = () => setActiveIndex((prevIndex) => prevIndex + 1);
  const handlePrev = () => setActiveIndex((prevIndex) => prevIndex - 1);

  const customers = [
    {
      name: "Jaime Foldón",
      comment:
        "I loved the experience of shopping at Lance's online store. From the moment I entered his website, I was able to easily navigate through the different categories and find what I was looking for.",
      rating: 5,
      image: persona1,
    },
    {
      name: "Aleja Amigo",
      comment:
        "I highly recommend Lance's online store. It is easy to use, intuitive, and has a wide variety of high-quality products. Also, I love that they offer free shipping on orders over a certain amount.",
      rating: 5,
      image: persona2,
    },
    {
      name: "Antonio Garrete",
      comment:
        "Lance's app is awesome! From the visually appealing design to the ease of navigation. Also, the range of products available was impressive and I was able to find exactly what I was looking for.",
      rating: 5,
      image: persona3,
    },
  ];

  const customer = customers[activeIndex];

  let customersRef = useRef()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(refCustomers({ reference: customersRef }))
  }, [])

  return (
    <div ref={customersRef}>
      <div className="customers">
        <div className="cont-title-customers">
          <h2>Satisfied customers</h2>
        </div>

        <div className="cont-names">
          <div className="carta-names">
            <div className="img">
              <img className="img-persona" src={customer.image} alt="" />
            </div>

            <div className="cont-textos">
              <h3 className="name">{customer.name}</h3>
              <p className="coment">{customer.comment}</p>
              <div>
                {[...Array(customer.rating)].map((_, index) => (
                  <img className="estrella" src="./Vector.png" alt="" key={index} />
                ))}
              </div>
            </div>
          </div>

          <div className="controls">
            {activeIndex > 0 && (
              <button className="prev-btn" onClick={handlePrev}>
                &#8249;
              </button>
            )}
            {activeIndex < customers.length - 1 && (
              <button className="next-btn" onClick={handleNext}>
                &#8250;
              </button>
            )}
          </div>
        </div>

      </div>
      <div className="allPerson">
        <div className="cont-title-customers">
          <h2>Satisfied customers</h2>
        </div>
        <div className="cont-names">
          {customers.map((customer) => (
            <div className="carta-names" key={customer.id}>
              <div className="img">
                <img className="img-persona" src={customer.image} alt="" />
              </div>
              <div className="cont-textos">
                <h3 className="name">{customer.name}</h3>
                <p className="coment">{customer.comment}</p>
                <div>
                  {[...Array(customer.rating)].map((_, index) => (
                    <img className="estrella" src="./Vector.png" alt="" key={index} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}