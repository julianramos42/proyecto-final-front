import React from 'react'
import logo from '../../images/logo.png'
import { Link as Anchor } from 'react-router-dom'

export default function HeaderAdmin() {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");

    const name = user ? user.name : "";
    const photo = user ? user.photo : "";
    const lastname = user ? user.lastname : "";

    return (
        <div className="header">
            <div className="containerLogoInput">
                <Anchor to="/" className="containerLogo">
                    <img src={logo} alt="" />
                </Anchor>
                {token ? (
                    <Anchor to="/profile" className="profileAnchor">
                        <div className="profileContainer">
                            <span className="nameProfile">
                                {name} {lastname}
                            </span>
                            <img className="profileImage" src={photo} alt="" />
                        </div>
                    </Anchor>
                ) : (
                    ""
                )}
            </div>
        </div>
    )
}
