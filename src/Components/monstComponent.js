import React from "react";
import "../MainRender/Stylings/App.css";

function MonstComponent(props) {
  return (
    <div key={props.monster.id}>
      <p className="charFontProperties">ID: {props.monster.id}</p>
      <p className="charFontProperties">{props.monster.name}</p>
      <img class="img" src={props.monster.photo} />
      <p className="charFontProperties">Strength: {props.monster.strength}</p>
      <p className="charFontProperties">Magic: {props.monster.magic}</p>
      <p className="charFontProperties">
        Hit Points: {props.monster.hp}
      </p>
      <button onClick={() => props.addToBadTeam(props.monster)} style = {{opacity: '.7'}}>Add</button>
      <button onClick={() => props.removeFromBadTeam(props.monster.id)} style = {{opacity: '.7'}}>Remove</button>
    </div>
  );
}

export default MonstComponent;
