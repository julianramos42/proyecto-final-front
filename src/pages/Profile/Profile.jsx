import React from "react";
import "./profile.css";
import NavBarStores from "../../components/NavBarStores/NavBarStores";
import { UpLoad } from "../../components/Icons/Icons";

export default function Profile() {
  return (
    <>
      <NavBarStores />
      <div className="containerContent">
        <div className="backgroundProfile">
          <div className="topProfile">Welcome back George!</div>
          <div className="bottomProfile">
            <span className="iconInfo">
              <p>i</p>
            </span>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, incidunt deserunt sapiente, veritatis voluptas dignissimos repudiandae odio illum laborum cupiditate iusto laboriosam.
            </p>
          </div>
          <span className="containerImageRounded">
            <img src="profile.jpg" alt="" className="profileImageRounded" />
            <div class="container-input">
              <input
                type="file"
                name="file-3"
                id="file-3"
                class="inputfile inputfile-3"
                data-multiple-caption="{count} archivos seleccionados"
                multiple
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
              <input type="text" placeholder="George" />
            </span>
            <span className="inputContainerProfile">
              <label>Surname</label>
              <input type="text" placeholder="Brushelas" />
            </span>
            <span className="inputContainerProfile">
              <label>Email</label>
              <input type="text" placeholder="GeorgeBrush@lance.app" disabled/>
            </span>

            <span className="containerButtonsProfile">
              <div className="buttonProfile">Cancel</div>
              <div className="buttonProfile">Save</div>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
