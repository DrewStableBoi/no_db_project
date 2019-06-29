const characters = require("../data/characters.json");
const monsters = require("../data/monsters.json");

module.exports = {
  getChars: (req, res) => {
    if (req.query.hp) {
      const characterHp = characters.filter(val => {
        return val.hp >= req.query.hp;
      });
      return res.status(200).send(characterHp);
    } else if (req.query.strength) {
      const characterStr = characters.filter(val => {
        return val.strength >= req.query.strength;
      });
      return res.status(200).send(characterStr);
    } else if (req.query.magic) {
      const characterMag = characters.filter(val => {
        return val.magic >= req.query.magic;
      });
      return res.status(200).send(characterMag);
    }
    res.status(200).send(characters);
  },

  getChar: (req, res) => {
    const person = characters.find(val => {
      return val.id === parseInt(req.params.id);
    });
    if (!person) {
      return res
        .status(500)
        .send("Character not here, please use a valid ID between 1 and 8");
    }
    res.status(200).send(person);
  },

  getMonsters: (req, res) => {
    if (req.query.hp) {
      const monsterHp = monsters.filter(val => {
        return val.hp >= req.query.hp;
      });
      return res.status(200).send(monsterHp);
    } else if (req.query.strength) {
      const monsterStr = monsters.filter(val => {
        return val.strength >= req.query.strength;
      });
      return res.status(200).send(monsterStr);
    } else if (req.query.magic) {
      const monsterMag = monsters.filter(val => {
        return val.magic >= req.query.magic;
      });
      return res.status(200).send(monsterMag);
    }
    res.status(200).send(monsters);
  },

  getMonster: (req, res) => {
    const monster = monsters.find(val => {
      return val.id === parseInt(req.params.id);
    });
    if (!monster) {
      return res
        .status(500)
        .send("Monster not here, please use a valid ID between 1 and 8");
    }
    res.status(200).send(monster);
  },

  createChar: (req, res) => {
    const { id, name, photo, strength, magic, hp } = req.body;
    let character = {
      id: id,
      name: name,
      photo: photo,
      strength: strength,
      magic: magic,
      hp: hp
    };
    characters.push(character);
    res.status(200).send(characters);
  },

  createMonster: (req, res) => {
    const { id, name, photo, strength, magic, hp } = req.body;
    let monster = {
      id: id,
      name: name,
      photo: photo,
      strength: strength,
      magic: magic,
      hp: hp
    };
    monsters.push(monster);
    res.status(200).send(monsters);
  },

  updateChar: (req, res) => {
    const index = characters.findIndex(char => {
      return char.id === Number(req.body.id);
    });
    if (index != -1) {
      characters[index] = {
        id: characters[index].id,
        name: req.body.name || characters[index].name,
        photo: req.body.photo || characters[index].photo,
        strength: Number(req.body.strength) || characters[index].strength,
        magic: Number(req.body.magic) || characters[index].magic,
        hp: Number(req.body.hp) || characters[index].hp
      };
    }
    res.status(200).send(characters);
  },

  updateMonster: (req, res) => {
    const index = monsters.findIndex(monst => {
      return monst.id === Number(req.body.id);
    });
    if (index != -1) {
      monsters[index] = {
        id: monsters[index].id,
        name: req.body.name || monsters[index].name,
        photo: req.body.photo || monsters[index].photo,
        strength: Number(req.body.strength) || monsters[index].strength,
        magic: Number(req.body.magic) || monsters[index].magic,
        hp: Number(req.body.hp) || monsters[index].hp
      };
    }
    res.status(200).send(monsters);
  },

  deleteChar: (req, res) => {
    let index = -1;
    characters.forEach((char, i) => {
      if (char.id === Number(req.params.id)) index = i;
    });
    if(index != -1) {
    characters.splice(index, 1);
    }
    res.status(200).send(characters);
  },

  deleteMonster: (req, res) => {
    let index = -1;
    monsters.forEach((monst, i) => {
      if (monst.id === Number(req.params.id)) index = i;
    });
    if(index != -1) {
    monsters.splice(index, 1);
    }
    res.status(200).send(monsters);
  }
};
