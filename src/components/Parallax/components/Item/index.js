import React from "react";
import Button from "../Button";
import {
  ItemContainer,
  ItemContent,
  ItemText,
  ItemTexDesc,
  ItemLowerThird,
  ItemButtons,
  ItemExpand
} from "./styles";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

function Item({
  id,
  title,
  desc,
  desclick,
  backGroundImg,
  leftBtnText,
  leftBtnLink,
  rightBtnText,
  rightBtnLink,
  twoButtons,
  first
}) {
  return (
    <ItemContainer id={id} backgroundImage={backGroundImg}>
      <ItemContent>
        <ItemText>
          <h1>{title}</h1>
          <ItemTexDesc>
            <h2>{desc}</h2>
          </ItemTexDesc>
        </ItemText>

        <ItemLowerThird>
          <ItemButtons>
            <Button imp='primary' text={leftBtnText} link={leftBtnLink} />
            {twoButtons && (
              <Button imp='secondary' text={rightBtnText} link={rightBtnLink} />
            )} 
          </ItemButtons>


          <ItemExpand>
            {first && (
              <ExpandMoreIcon fontSize="large" />
            )}
          </ItemExpand>
        </ItemLowerThird>
      </ItemContent>
    </ItemContainer>
  )
}

export default Item;
