import React, { useState } from "react";
import "./profile.css";
import NavBarStores from "../../components/NavBarStores/NavBarStores";
import { UpLoad } from "../../components/Icons/Icons";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import AWS from "aws-sdk";

export default function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  const name = user.name;
  const mail = user.mail;
  const photo = user.photo;
  const lastname = user.lastname;
  const [selectedFile, setSelectedFile] = useState(null);
  const [reload, setReload] = useState(false);

  const [data, setData] = useState({
    name: user.name,
    last_name: user.last_name || "",
    photo: user.photo,
    email: user.mail,
  });

  const s3 = new AWS.S3({
    accessKeyId: "AKIAQTTFIUBXACB3GRNQ",
    secretAccessKey: "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",
    region: "sa-east-1",
  });

  async function editProfile(e) {
    const token = localStorage.getItem("token");
    const headers = { headers: { Authorization: `Bearer ${token}` } };
    const url = "http://localhost:8080/auth/update";
    const formData = new FormData();

    try {
      const response = await axios.put(url, data, headers);
      let photoStorage = user.photo;
      if (selectedFile) {
        const file = selectedFile;
        const fileName = `${file.name}`;
        const params = {
          Bucket: "lancedatabaseimages",
          Key: fileName,
          Body: file,
        };
        await s3.upload(params).promise();
        photoStorage = `https://lancedatabaseimages.s3.amazonaws.com/${fileName}`;
      }

      localStorage.setItem(
        "user",
        JSON.stringify({
          ...user,
          name: data.name,
          lastname: data.last_name,
          photo: photoStorage,
        })
      );
      setReload(true);
      toast.success(response.data.message);
    } catch (error) {
      console.log(error);
    }
  }

  function handleFileSelect(event) {
    const file = event.target.files[0];
    const urlImage = URL.createObjectURL(file);
    setSelectedFile(file);
    setData({ ...data, photo: urlImage });
  }

  return (
    <>
      <NavBarStores />
      <div className="containerContent">
        <div className="backgroundProfile">
          <div className="topProfile">Welcome back {name} !</div>
          <div className="bottomProfile">
            <span className="iconInfo">
              <p>i</p>
            </span>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Suscipit, incidunt deserunt sapiente, veritatis voluptas
              dignissimos repudiandae odio illum laborum cupiditate iusto
              laboriosam.
            </p>
          </div>
          <span className="containerImageRounded">
            <img src={photo} alt="" className="profileImageRounded" />
            <div class="container-input">
              <input
                type="file"
                name="file-3"
                id="file-3"
                class="inputfile inputfile-3"
                data-multiple-caption="{count} archivos seleccionados"
                multiple
                onChange={handleFileSelect}
                hidden
              />
              <label for="file-3" className="upLoadIcon">
                <UpLoad />
              </label>
            </div>
          </span>
          <div className="containerInputs">
            <span className="inputContainerProfile">
              <label>Name</label>
              <input
                type="text"
                placeholder={name}
                value={data.name}
                onChange={(event) =>
                  setData({ ...data, name: event.target.value })
                }
              />
            </span>
            <span className="inputContainerProfile">
              <label>Last name</label>
              <input
                type="text"
                placeholder={lastname}
                value={data.last_name}
                onChange={(event) =>
                  setData({ ...data, last_name: event.target.value })
                }
              />
            </span>
            <span className="inputContainerProfile">
              <label>Email</label>
              <input
                type="text"
                placeholder={mail}
                onChange={(event) =>
                  setData({ ...data, email: event.target.value })
                }
                disabled
              />
            </span>
   

            <span className="containerButtonsProfile">
              <div className="buttonProfile">Cancel</div>
              <div className="buttonProfile" onClick={editProfile}>
                Save
              </div>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
