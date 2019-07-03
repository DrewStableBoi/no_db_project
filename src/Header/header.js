import React, { Component } from "react";
import "../MainRender/Stylings/App.css";

class Header extends Component {
  constructor() {
    super();

    this.state = {
      id: "",
      name: "",
      photo: "",
      strength: "",
      magic: "",
      hp: ""
    };

    this.changeId = this.changeId.bind(this);
    this.changeName = this.changeName.bind(this);
    this.changePhoto = this.changePhoto.bind(this);
    this.changeStrength = this.changeStrength.bind(this);
    this.changeMagic = this.changeMagic.bind(this);
    this.changeHitPoints = this.changeHitPoints.bind(this);
    this.battle = this.battle.bind(this);
  }

  changeId(e) {
    this.setState({
      id: e.target.value
    });
  }

  changeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  changePhoto(e) {
    this.setState({
      photo: e.target.value
    });
  }

  changeStrength(e) {
    this.setState({
      strength: e.target.value
    });
  }

  changeMagic(e) {
    this.setState({
      magic: e.target.value
    });
  }

  changeHitPoints(e) {
    this.setState({
      hp: e.target.value
    });
  }

  battle() {
    const { goodCounter, badCounter } = this.props;

    const goodHp = goodCounter.reduce((acc, character) => {
        return acc + character.hp
    },0);
    const goodMagic = goodCounter.reduce((acc, character) => {
      return acc + character.magic
    },0);
    const goodStrength = goodCounter.reduce((acc, character) => {
      return acc + character.strength
    },0);

    const badHp = badCounter.reduce((acc, monster) => {
        return acc + monster.hp
    },0);
    const badMagic = badCounter.reduce((acc, monster) => {
      return acc + monster.magic
    },0);
    const badStrength = badCounter.reduce((acc, monster) => {
      return acc + monster.strength
    },0);

    const monsterOffering = badHp + badStrength + badMagic;
    const goodOffering = goodHp + goodStrength + goodMagic;

    console.log(monsterOffering);
    console.log(goodOffering);

    if(goodOffering > monsterOffering) {
      alert("You've won!")
    }
    else {
      alert("You've lost, and you suck! Try adding a beefy boi and then fighting again")
    };
  }

  render() {
    return (
      <div>
        <h1 className="header">
          {" "}
          Final Fantasy Battle Simulator
          <div className="inputBoxes">
            <input onChange={this.changeId} placeholder="ID" />
            <input onChange={this.changeName} placeholder="Name" />
            <input onChange={this.changePhoto} placeholder="Paste Photo URL" />
            <input onChange={this.changeStrength} placeholder="Strength" />
            <input onChange={this.changeMagic} placeholder="Magic" />
            <input onChange={this.changeHitPoints} placeholder="Hit Points" />
            <button onClick={() => this.props.createChar(this.state)}>
              Create Friend
            </button>
            <button onClick={() => this.props.createEnemy(this.state)}>
              Create Foe
            </button>
            <button onClick={() => this.props.updateCharacter(this.state)}>
              Edit Character
            </button>
            <button onClick={() => this.props.updateMonster(this.state)}>
              Edit Monster
            </button>
            <button onClick={() => this.props.deleteCharacter(this.state.id)}>
              Delete Character
            </button>
            <button onClick={() => this.props.deleteMonster(this.state.id)}>
              Delete Monster
            </button>
            <button onClick={this.props.resetTeams}>Reset Teams</button>
            <button onClick={this.battle}>BATTLE!!</button>
          </div>
          <div className="counterBox">
            <h2 style={{ fontSize: "20px" }}>
              Friendly Team: {this.props.goodCounter.length}
            </h2>

            <h3 style={{ fontSize: "20px" }}>
              Enemy Team: {this.props.badCounter.length}
            </h3>
          </div>
        </h1>
        <p className="sub-header">By Drew Hemsley</p>
      </div>
    );
  }
}

export default Header;
