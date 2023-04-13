import React, { useEffect, useRef, useState } from "react";
import "./modaleCreateProduc.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import AWS from "aws-sdk";

export default function Modal({ onClose }) {
  const formInfo = useRef();
  const [reload, setReload] = useState();
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const s3 = new AWS.S3({
    accessKeyId: "AKIAQTTFIUBXP2EXKXKF",
    secretAccessKey: "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",
    region: "sa-east-1",
  });
  
  async function createProduct(e) {
    const token = localStorage.getItem("token");
    const headers = { headers: { Authorization: `Bearer ${token}` } };
    e.preventDefault();
    const url = "http://localhost:8080/product/create";
    const data = {
      name: formInfo.current[0].value,
      category: formInfo.current[1].value,
      price: formInfo.current[2].value,
      stock: formInfo.current[3].value,
      photo: formInfo.current[4].value,
      description: formInfo.current[5].value
    };
    try {
      if (selectedPhoto) {
        const photo = selectedPhoto;
        const photoName = `${photo.name}`;
        const params = {
          Bucket: "lancedatabaseimages",
          Key: photoName,
          Body: photo,
        };
        const responseS3 = await s3.upload(params).promise();
        data.photo = responseS3.Location;
      }
      const res = await axios.post(url, data, headers);
      toast.success(res.data.message);
      onClose(true);
      setReload(true);

    } catch (error) {
      console.log(error)
    }
  }

  function handlePhotoSelect(event) {
    setSelectedPhoto(event.target.files[0]);
  }
    return (
      <div className="modalContainer2">
        <div className="contentModal2">
          <h3>Create your product</h3>
          <div className="containerMyShop">
            <form className="containerMyShop2" ref={formInfo}>
              <span>
                <label>Name</label>
                <input type="text"/>
              </span>
              <span>
                <label>Category</label>
                <input
                  type="text"
                />
              </span>
              <span>
                <label>Price</label>
                <input
                  type="number"
                />
              </span>
              <span>
                <label>Stock</label>
                <input
                  type="number"
                />
              </span>
              <span>
              <label>Select photo</label>
              <input
                type="file"
                name="banner"
                id="file-banner"
                accept="image/png image/jpg image/jpeg image/bmp image/gif"
                className="inputfile inputfile-3"
                onChange={handlePhotoSelect}
                data-multiple-caption="{count} files selected"
                hidden
              />
              <label htmlFor="file-banner" className="uploadInput">
                <span>Select File</span>
              </label>
            </span>
            <span>
                <label>Description</label>
                <textarea className="textAreaModal" name="" id="" cols="30" rows="10"></textarea>
              </span>
  
              <div className="buttonsContainerModal">
                <button onClick={onClose}>Cancel</button>
                <button onClick={createProduct}>Create</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
  