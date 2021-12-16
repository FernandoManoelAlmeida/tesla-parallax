import React from "react";
import './Header.css'
import TeslaLogo from "../assets/teslaLogoSmall.svg"

function Header({ items }) {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={TeslaLogo} alt="" />
      </div>

      <div className="header__center">
        {items.map((item) => (
          <p>
            <a href={`#${item.id}`}>{item.title}</a>
          </p>
        ))}
      </div>

      <div className="header__right">
        <p>Shop</p>
        <p>Tesla Account</p>
      </div>
    </div>
  )
}

export default Header
