import React from "react";
import Item from './components/Item';
import { ParallaxContainer } from "./styles";

function Parallax({ items }) {
  return (
    <ParallaxContainer>
      {items.map((item) => (
        <Item {...item} />
      ))}
    </ParallaxContainer>
  )
}

export default Parallax;
