import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  background-color: transparent;
  background: none;
  position: fixed;
  width: calc(100vw - 64px);
  top: 0;
  margin: 15px 32px;
  margin-top: 15px;
  z-index: 100;
`;

export const HeaderLogo = styled.div`
  height: 24px;
  width: 100px;
  margin-top: 7px;
  cursor: pointer;
  img {
    width: 130px;
    height: 16px;
  }
`;

export const HeaderCenter = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  p {
    margin: 10px;
    text-transform: uppercase;
    a {
      text-decoration: none;
      color: initial;
    }
  }

  @media (max-width: 1023px) and (orientation: portrait) {
    display: none;
  }

  @media (max-width: 1023px) and (orientation: landscape) {
    display: none;
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  justify-content: flex-end;
  text-transform: uppercase;
  p {
    margin: 10px;
  }

  @media (orientation: portrait) {
    display: none;
  }

  @media (max-width: 1024px) and (orientation: landscape) {
    display: none;
  }
`;