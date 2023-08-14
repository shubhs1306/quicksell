import React from "react";
import Tag from "../Tag/Tag";
import { Checkbox, Chip } from "@mui/material";
import "./Cards.css";
function Cards() {
  return (
    <div className="card">
      <div className="cardTop">
        <div className="cardID">CAM-1 </div>
        <div>avatar badge</div>
      </div>
      {/* <Checkbox defaultChecked round /> */}
      <p className="classTitle">Card Title</p>
      <div>priority icon</div>

      <Chip label="With Icon" variant="outlined" />
      <Tag text="itemTag" />
    </div>
  );
}

export default Cards;
