import React, { useRef, useState } from "react";
import NavBarStores from "../../components/NavBarStores/NavBarStores";
import "./mystore.css";
import { Delete, UpLoad } from "../../components/Icons/Icons";
import { useSelector } from "react-redux";
import Auth from "../../components/Auth/Auth";
import CategoriesSelect from "../../components/CategoriesSelect/CategoriesSelect";
import loginbg from "../../images/login-bg.png";
import axios from "axios";
import AWS from "aws-sdk";

export default function MyStore() {
  let modalState = useSelector((store) => store.modalFormReducer.state);
  const user = JSON.parse(localStorage.getItem("user"));
  const seller = user.seller;
  const formInfo = useRef();
  const token = localStorage.getItem("token");
  const headers = { headers: { Authorization: `Bearer ${token}` } };

  async function handleNewShop(e) {
    e.preventDefault();

    const url = "http://localhost:8080/shop/create";
    const urlIMG =
      "data:image/png;base64,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";
    const data = {
      name: formInfo.current?.name?.value || "",
      category: formInfo.current?.category?.value || "",
      country: formInfo.current?.country?.value || "",
      city: formInfo.current?.city?.value || "",
      photo: urlIMG,
      banner: urlIMG,
      description: formInfo.current?.description?.value || "",
    };

    // const s3 = new AWS.S3({
    //   accessKeyId: "AKIAQTTFIUBXACB3GRNQ",
    //   secretAccessKey: "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",
    //   region: "sa-east-1",
    // });

    console.log(data);

    try {
      const response = await axios.post(url, data, headers);
      localStorage.setItem("user", JSON.stringify({ ...user, seller: true }));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <NavBarStores />
      <div className="containerContent">
        {modalState === "register" ? <Auth /> : <></>}
        {modalState === "login" ? <Auth /> : <></>}
        {seller === true ? (
          <>
            <div className="myStoreBanner">
              <span className="containerBannerMyStore">
                <img src="./Banner.jpg" alt="" />
              </span>

              <div className="profileImageMyStore">
                <img src="./profile.jpg" alt="" />
              </div>
            </div>
            <div className="infoMyStore">
              <span className="containerInfoMyStore">
                <h3 className="storeName">Georgi Brushelas Store</h3>
                <p>Shoes</p>
              </span>
              <span className="buttonsContainer">
                <div className="buttonEditBanner">
                  <UpLoad />
                  Edit Banner
                </div>
                <div className="buttonDeleteAll">Delete All</div>
              </span>
            </div>
            <div className="viewContentMyStore">
              <div className="containerCardsMyStore"></div>
            </div>
          </>
        ) : (
          <div className="viewCreateNewStore">
            <h2 className="newShop">New Shop</h2>
            <div className="viewNewShopIMG">
              <img src={loginbg} alt="" className="loginBg" />
            </div>
            <div className="viewNewShop">
              <form ref={formInfo} className="contInputNewStore">
                <span>
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    onChange={(e) => e.target.value}
                    required
                  />
                </span>
                <span>
                  <label>Select Category</label>
                  <CategoriesSelect style="selectMyStore" />
                </span>
                <span>
                  <label>Country</label>
                  <input type="text" required name="country" />
                </span>
                <span>
                  <label>City</label>
                  <input type="text" name="city" required />
                </span>
                <span>
                  <label>Upload Logo</label>
                  <input
                    type="file"
                    name="photo"
                    id="file-logo"
                    className="inputfile inputfile-3"
                    data-multiple-caption="{count} files selected"
                    hidden
                  />
                  <label htmlFor="file-logo" className="logoUpload">
                    <span>Select File</span>
                  </label>
                </span>
                <span>
                  <label>Upload Banner</label>
                  <input
                    type="file"
                    name="banner"
                    id="file-banner"
                    className="inputfile inputfile-3"
                    data-multiple-caption="{count} files selected"
                    hidden
                  />
                  <label htmlFor="file-banner" className="logoUpload">
                    <span>Select File</span>
                  </label>
                </span>
                <span>
                  <label>Description</label>
                  <textarea
                    name="description"
                    id=""
                    cols="30"
                    rows="5"
                    required
                  ></textarea>
                </span>
                <button className="submitButton" onClick={handleNewShop}>
                  Create
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
