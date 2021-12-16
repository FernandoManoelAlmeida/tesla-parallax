import styled from "styled-components";

export const ItemContainer = styled.div`
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  scroll-snap-align: start;

  ${(props) => props?.backgroundImage && `
    background-image: url(${props.backgroundImage})
  `}
`;

export const ItemContent = styled.div`
  width: 40wv;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ItemText = styled.div`
  margin-top: 20%;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  font-size: 34px;
  color: #393c41;
  align-items: center;
  flex: 1;
  h1 {
    font-size: 40px;
  }
`;

export const ItemTexDesc = styled.div`
  font-weight: 200;
  font-size: 14px;
  text-align: center;
`;

export const ItemLowerThird = styled.div`
  margin-bottom: 5%;
  display: flex;
  flex-direction: column;
`;

export const ItemButtons = styled.div`
  display: flex;
  @media (orientation: portrait) {
    flex-direction: column;
  }
`;

export const ItemExpand = styled.div`
  color: white;
  width: 100%;
  min-height: 53px;
  margin-top: 3%;
  justify-content: center;
  text-align: center;
  svg {
    font-size: 50px;
  }
`;
