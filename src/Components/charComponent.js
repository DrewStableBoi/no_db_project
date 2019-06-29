import React from "react";
import "../MainRender/Stylings/App.css";

function CharComponent(props) {
  return (
    <div key={props.character.id}>
      <p className="charFontProperties">ID: {props.character.id}</p>
      <p className="charFontProperties">{props.character.name}</p>
      <img class="img" src={props.character.photo} />
      <p className="charFontProperties">Strength: {props.character.strength}</p>
      <p className="charFontProperties">Magic: {props.character.magic}</p>
      <p className="charFontProperties">Hit Points: {props.character.hp}</p>
      <button
        onClick={() => props.addToGoodTeam(props.character)}
        style={{ opacity: ".7" }}
      >
        Add
      </button>
      <button
        onClick={() => props.removeFromGoodTeam(props.character.id)}
        style={{ opacity: ".7" }}
      >
        Remove
      </button>
    </div>
  );
}

export default CharComponent;
