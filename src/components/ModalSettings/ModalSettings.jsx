import React from "react";
import "./modalsettings.css";

export default function Modal() {
  return (
    <div className="modalContainer">
      <div className="contentModal">
        <div className="buttonDeleteAll">Delete all products</div>
        <div className="buttonDeleteAll">Delete shop</div>
        <span>
          <label>Mercado Pago</label>
          <label>Insert your access keys</label>
        </span>
      </div>
    </div>
  );
}
