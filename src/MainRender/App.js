import React, { Component } from "react";
import "./Stylings/App.css";
import "./Stylings/reset.css";
import axios from "axios";
import CharComponent from "../Components/charComponent";
import MonstComponent from "../Components/monstComponent";
import Header from "../Header/header";
import Body from "../Body/body";
import GoodTeam from "../Components/goodTeamRender";
import BadTeam from "../Components/badTeamRender";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

class WholeApp extends Component {
  constructor() {
    super();

    this.state = {
      charactersToDisplay: [],
      monstersToDisplay: [],
      goodTeam: [],
      badTeam: []
    };

    this.getCharacters = this.getCharacters.bind(this);
    this.getMonsters = this.getMonsters.bind(this);
    this.getCharacter = this.getCharacter.bind(this);
    this.getMonster = this.getMonster.bind(this);
    this.createChar = this.createChar.bind(this);
    this.createMonster = this.createMonster.bind(this);
    this.updateCharacter = this.updateCharacter.bind(this);
    this.updateMonster = this.updateMonster.bind(this);
    this.deleteCharacter = this.deleteCharacter.bind(this);
    this.deleteMonster = this.deleteMonster.bind(this);
    this.addToGoodTeam = this.addToGoodTeam.bind(this);
    this.removeFromGoodTeam = this.removeFromGoodTeam.bind(this);
    this.addToBadTeam = this.addToBadTeam.bind(this);
    this.removeFromBadTeam = this.removeFromBadTeam.bind(this);
    this.resetTeams = this.resetTeams.bind(this);
  }

  getCharacters() {
    axios
      .get("http://localhost:4001/api/characters")
      .then(results => {
        console.log(results);
        this.setState({ charactersToDisplay: results.data });
        toast.success("Successfully got Characters! Select your Fighters!");
      })
      .catch(err => {
        console.log(err);
        toast.error("Failed at fetching Characters");
      });
  }

  getMonsters() {
    axios
      .get("http://localhost:4001/api/monsters")
      .then(results => {
        toast.success("Successfully got Monsters. What awaits?");
        this.setState({ monstersToDisplay: results.data });
      })
      .catch(err => {
        console.log(err);
        toast.error("Failed at fetching Monsters");
      });
  }

  getCharacter(id) {
    axios.get(`http://localhost:4001/api/characters/${id}`).then(results => {
      toast.success("Successfully retrieved your favorite character!");
      this.setState({
        charactersToDisplay: results.data
      });
    });
  }

  getMonster(id) {
    axios.get(`http://localhost:4001/api/monsters/${id}`).then(results => {
      toast.success("Successfully retrieved your favorite monster!");
      this.setState({
        monstersToDisplay: results.data
      });
    });
  }

  createChar(newChar) {
    axios
      .post("http://localhost:4001/api/characters", newChar)
      .then(results => {
        toast.success("Successfully added a new character!");
        this.setState({
          charactersToDisplay: results.data
        });
      })
      .catch(() => {
        toast.error("Sorry, that failed. Try again!");
      });
  }

  createMonster(newMonster) {
    axios
      .post("http://localhost:4001/api/monsters", newMonster)
      .then(results => {
        toast.success("Successfully added a new monster!");
        this.setState({
          monstersToDisplay: results.data
        });
      })
      .catch(() => {
        toast.error("Sorry, that failed. Try again!");
      });
  }

  updateCharacter(thingChanged, id) {
    axios
      .put(`http://localhost:4001/api/characters/${id}/${thingChanged}`)
      .then(results => {
        toast.success(
          `You've successfully changed the thing!`
        );
        this.setState({
          charactersToDisplay: results
        });
      })
      .catch(() => {
        toast.error("Sorry, that failed. Try again!");
      });
  }

  updateCharacter(updatedChar) {
        axios
      .put(`http://localhost:4001/api/characters`, updatedChar)
      .then(results => {
        toast.success(
          `You've successfully changed the character!`
        );
        this.setState({
          charactersToDisplay: results.data
        });
      })
      .catch(() => {
        toast.error("Sorry, that failed. Try again!");
      });
  }

  updateMonster(updatedMonster) {
    axios
      .put(`http://localhost:4001/api/monsters`, updatedMonster)
      .then(results => {
        toast.success(`You've successfully changed the monster!`);
        this.setState({
          monstersToDisplay: results.data
        });
      })
      .catch(() => {
        toast.error("Sorry, that failed. Try again!");
      });
  }

  deleteCharacter(id) {
    axios
      .delete(`http://localhost:4001/api/characters/${id}`)
      .then(results => {
        toast.success(
          `You've successfully deleted the character with ID ${id}`
        );
        this.setState({
          charactersToDisplay: results.data
        });
      })
      .catch(() => {
        toast.error("Sorry, that failed. Try again!");
      });
  }

  deleteMonster(id) {
    axios
      .delete(`http://localhost:4001/api/monsters/${id}`)
      .then(results => {
        toast.success(`You've successfully deleted the monster with ID ${id}`);
        this.setState({
          monstersToDisplay: results.data
        });
      })
      .catch(() => {
        toast.error("Sorry, that failed. Try again!");
      });
  }

  addToGoodTeam(ally) {
    const updatedGoodTeam = [...this.state.goodTeam, ally];
    // the above is doing this => this.state.goodTeam.push(ally)
    this.setState({
      goodTeam: updatedGoodTeam
    });
  }

  addToBadTeam(monst) {
    const updatedBadTeam = [...this.state.badTeam, monst];
    // the above is doing this => this.state.goodTeam.push(ally)
    this.setState({
      badTeam: updatedBadTeam
    });
  }

  removeFromGoodTeam(id) {
    console.log(id);
    const filterArray = this.state.goodTeam.filter(ally => {
      return ally.id !== id;
    });
    this.setState({
      goodTeam: filterArray
    });
  }

  removeFromBadTeam(id) {
    console.log(id);
    const filterArray = this.state.badTeam.filter(monst => {
      return monst.id !== id;
    });
    this.setState({
      badTeam: filterArray
    });
  }

  resetTeams() {
    if (this.state.goodTeam === []) {
      toast.error("You have no teams to reset!");
    } else {
      this.setState({
        goodTeam: [],
        badTeam: []
      });
      toast.success("Successfully reset teams!");
    };
  }

  render() {
    return (
      <div className="App">
        <div>
          {" "}
          <Header
            goodCounter={this.state.goodTeam}
            badCounter={this.state.badTeam}
            resetTeams={this.resetTeams}
            createChar={this.createChar}
            createEnemy={this.createMonster}
            getCharacters={this.getCharacters}
            updateCharacter={this.updateCharacter}
            updateMonster={this.updateMonster}
            deleteCharacter={this.deleteCharacter}
            deleteMonster={this.deleteMonster}
          />
          <Body
            getCharacters={this.getCharacters}
            getMonsters={this.getMonsters}
          />
          <div className="display">
            <div className="charContainer">
              {this.state.charactersToDisplay.map(character => {
                return (
                  <div className="individual">
                    <div key={character.id}>
                      <CharComponent
                        character={character}
                        addToGoodTeam={this.addToGoodTeam}
                        removeFromGoodTeam={this.removeFromGoodTeam}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="monstContainer">
              {this.state.monstersToDisplay.map(monster => {
                return (
                  <div className="individual">
                    <div key={monster.id}>
                      <MonstComponent
                        monster={monster}
                        addToBadTeam={this.addToBadTeam}
                        removeFromBadTeam={this.removeFromBadTeam}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="teamRender">
          {this.state.goodTeam.map(character => {
            return (
              <div className="individual">
                <div key={character.id}>
                  <GoodTeam character={character} />
                </div>
              </div>
            );
          })}
        </div>
        <div className="teamRender">
          {this.state.badTeam.map(monster => {
            return (
              <div className="individual">
                <div key={monster.id}>
                  <BadTeam monster={monster} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default WholeApp;
