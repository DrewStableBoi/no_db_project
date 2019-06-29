import React from "react";
import "../MainRender/Stylings/App.css";

function GoodTeam(props) {
  return (
    <div key={props.character.id}>
      <p className="charFontProperties">Good Team: {props.character.name}</p>
    </div>
  );
}
export default GoodTeam;
