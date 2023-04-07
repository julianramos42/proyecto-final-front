import React from "react";
import NavBarStores from "../../components/NavBarStores/NavBarStores";
import "./mystore.css";
import { Delete, UpLoad } from "../../components/Icons/Icons";
import { useSelector } from "react-redux";
import Auth from "../../components/Auth/Auth";
import CategoriesSelect from "../../components/CategoriesSelect/CategoriesSelect";
import loginbg from "../../images/login-bg.png";

export default function MyStore() {
  let modalState = useSelector((store) => store.modalFormReducer.state);
  let token = localStorage.getItem("token");

  return (
    <>
      <NavBarStores />
      <div className="containerContent">
        {modalState === "register" ? <Auth /> : <></>}
        {modalState === "login" ? <Auth /> : <></>}
        {token ? (
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
              <form action="" className="contInputNewStore">
                <span>
                  <label>Name</label>
                  <input type="text" required />
                </span>
                <span>
                  <label>Select Category</label>
                  <CategoriesSelect style="selectMyStore" />
                </span>
                <span>
                  <label>Country</label>
                  <input type="text" required />
                </span>
                <span>
                  <label>City</label>
                  <input type="text" required />
                </span>
                <span>
                  <label>Upload Logo</label>
                  <input
                    type="file"
                    name="file-logo"
                    id="file-logo"
                    class="inputfile inputfile-3"
                    data-multiple-caption="{count} files selected"
                    multiple
                    hidden
                  />
                  <label for="file-logo" className="logoUpload">
                    <span>Select File</span>
                  </label>
                </span>
                <span>
                  <label>Upload Banner</label>
                  <input
                    type="file"
                    name="file-banner"
                    id="file-banner"
                    class="inputfile inputfile-3"
                    data-multiple-caption="{count} files selected"
                    multiple
                    hidden
                  />
                  <label for="file-banner" className="logoUpload">
                    <span>Select File</span>
                  </label>
                </span>
                <span>
                  <label>Description</label>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="5"
                    required
                  ></textarea>
                </span>
                <button className="submitButton">Create</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
