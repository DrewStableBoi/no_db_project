import React from "react";
import "../MainRender/Stylings/App.css";

function BadTeam(props) {
  return (
    <div key={props.monster.id}>
      <p className="charFontProperties">Bad Team: {props.monster.name}</p>
    </div>
  );
}
export default BadTeam;
