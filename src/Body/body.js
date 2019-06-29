import React from "react";
import "../MainRender/Stylings/App.css";

function Body(props) {
  return (
    <div className="sub-body">
      <h1 className="body" style={{ fontSize: "20px" }}>
        Welcome!
      </h1>
      <p className="body">
        Welcome to the FF Battle Simulator. I've given up caring if people think
        I'm nerdy; I love these games and all they have to offer. To use it is
        simple enough. Click the buttons below to get your characters and
        monster roster. Once they're returned, you have the ability to examine
        their statistics. You can add them to your team, modify them, whatever
        you'd like to do. Once you add them and add monsters to your team and
        the enemy team, respectively, you'll be able to simulate who would win
        based on a simple calculus of their statistics. To add, remove, or edit
        a character, use the input fields at the top to enter in either an ID or
        a Name if you're adding or deleting, otherwise input fields in order
        to edit a character!
      </p>
      <div className="buttonContainer">
        <div className="getButtonProperties">
          <button className="getButtons" onClick={props.getCharacters}>
            Get Characters
          </button>
          <button className="getButtons" onClick={props.getMonsters}>
            Get Monsters
          </button>
        </div>
      </div>
    </div>
  );
}

export default Body;
