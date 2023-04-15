import React from "react";
import "./modaltokeninfo.css"

export default function ModalTokenInfo(props) {
  const { showModal, setShowModal } = props;

  function navegationMP(){
    window.location.href = "https://www.mercadopago.com.ar/developers/es/docs"
  }
  return (
    <>
      {showModal ? (
        <div className="modalT">
          <div className="modal-content">
            <div className="conttokenX">
                <h2>How to get this token?</h2>
                <button className="close-btn" onClick={() => setShowModal(false)}>X</button>
            </div>
            
            <iframe width="100%" height="415" src="https://www.youtube.com/embed/hJLElbwxnRg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <p>Go to <button onClick={navegationMP} className="mercadopago">https://www.mercadopago.com.ar/developers/es/docs"</button></p>
            
          </div>
        </div>
      ) : null}
    </>
  );
}
