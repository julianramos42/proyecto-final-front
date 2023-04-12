import React, { useEffect, useState } from "react";
import "./cardstoreview.css";
import { Link as Anchor } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

export default function CardStoreView(props) {
  const [isFavourite, setIsFavourite] = useState("favourite-svg");
  const [shopFavourites, setShopFavourites] = useState([]);
  const token = localStorage.getItem("token");
  const headers = { headers: { Authorization: `Bearer ${token}` } };

  const shops = useSelector((store) => store.shopsReducer.shop);

  async function addFavourite(e) {
    const url = `http://localhost:8080/favourites/${e.target.id}`;
    try {
      const response = await axios.post(url, "", headers);
      getFavourites();
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteFavourite(e) {
    const favouriteId = e.target.id;
    const url = `http://localhost:8080/favourites/${e.target.id}`;
    try {
      await axios.delete(url, headers);
      getFavourites();
    } catch (error) {
      console.log(error);
    }
  }

  function handleHearth(e) {
    const storeId = e.target.id;
    const isFavourite = shopFavourites.some(
      (favourite) => favourite.store_id._id == storeId
    );
    setIsFavourite(isFavourite ? "favourite-svg" : "favourite-svg favourite");
    if (isFavourite) {
      deleteFavourite(e);
    } else {
      addFavourite(e);
    }
  }

  async function getFavourites() {
    const token = localStorage.getItem("token");
    const headers = { headers: { Authorization: `Bearer ${token}` } };
    const url = `http://localhost:8080/favourites/`;
    try {
      const response = await axios.get(url, headers);
      setShopFavourites(response.data.favourites);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getFavourites();
  }, []);

  return (
    <>
      {shops.map((shop, i) => {
        let card = (
          <div className="containerCard" key={i}>
            <span className="viewIcon" onClick={handleHearth} id={shop._id}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="18"
                viewBox="0 0 16 14"
                fill="none"
              >
                <path
                  d="M4.70857 0C2.16607 0 0 2.0076 0 4.61497C0 6.41369 0.797574 7.92804 1.85462 9.18248C2.90803 10.4326 4.2671 11.4819 5.49575 12.3602L7.61562 13.8755C7.84778 14.0415 8.15222 14.0415 8.38438 13.8755L10.5043 12.3602C11.7329 11.4819 13.092 10.4326 14.1454 9.18248C15.2024 7.92804 16 6.41369 16 4.61497C16 2.0076 13.8339 0 11.2914 0C9.98083 0 8.82757 0.648961 8 1.48867C7.17243 0.648962 6.01917 0 4.70857 0Z"
                  fill="white"
                  id={shop._id}
                  className={shopFavourites
                    .map((favourite) => {
                      return favourite.store_id._id === shop._id
                        ? "favourite-svg favourite"
                        : "favourite-svg";
                    })
                    .join(" ")}
                />
              </svg>
            </span>
            <div className="viewTop">
              <img src={shop.banner} alt="" />
            </div>
            <div className="viewProfile">
              <img src={shop.photo} alt="" />
            </div>
            <div className="viewBottom">
              <span>
                <h3>{shop.name}</h3>
                <p>{shop.category}</p>
              </span>
              <Anchor to={`/shop/${shop._id}`} className="viewButton">
                Visit store
              </Anchor>
            </div>
          </div>
        );
        return card;
      })}
    </>
  );
}
