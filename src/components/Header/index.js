import React from "react";
import { HeaderContainer, HeaderLogo, HeaderCenter, HeaderRight } from "./styles";
import TeslaLogo from "../../assets/teslaLogoSmall.svg"

function Header({ items }) {
  return (
    <HeaderContainer>
      <a href="/">
        <HeaderLogo>
          <img src={TeslaLogo} alt="" />
        </HeaderLogo>
      </a>

      <HeaderCenter>
        {items.map((item) => (
          <p>
            <a href={`#${item.id}`}>{item.title}</a>
          </p>
        ))}
      </HeaderCenter>

      <HeaderRight>
        <p>Shop</p>
        <p>Tesla Account</p>
      </HeaderRight>
    </HeaderContainer>
  )
}

export default Header
