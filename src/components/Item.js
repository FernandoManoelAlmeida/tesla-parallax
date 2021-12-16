import React from "react";
import Button from "./Button";
import './Item.css';

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
    <div id={id} className="item" style={{
      backgroundImage: `url(${backGroundImg})`
    }}>

      <div className="item__container">
        <div className="item__text">
          <h1>{title}</h1>
          <div className="item__textDesc">
            <h2>{desc}</h2>
          </div>
        </div>

        <div className="item__lowerThird">
          <div className="item__buttons">
            <Button imp='primary' text={leftBtnText} link={leftBtnLink} />
            {twoButtons && (
              <Button imp='secondary' text={rightBtnText} link={rightBtnLink} />
            )} 
          </div>


          <div className="item__expand">
            {first && (
              <ExpandMoreIcon fontSize="large" />
            )}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Item;
