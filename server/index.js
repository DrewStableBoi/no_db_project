const express = require("express");
const controller = require("../server/controllers/controller");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const port = 4001;

app.get("/api/characters", controller.getChars);
app.get("/api/characters/:id", controller.getChar);
app.get("/api/monsters", controller.getMonsters);
app.get("/api/monsters/:id", controller.getMonster);

app.post("/api/characters", controller.createChar);
app.post("/api/monsters", controller.createMonster);

app.put("/api/characters", controller.updateChar);
app.put("/api/monsters", controller.updateMonster);

app.delete("/api/characters/:id", controller.deleteChar);
app.delete("/api/monsters/:id", controller.deleteMonster);

app.listen(port, () => {
  console.log(`DAT BOI listening on port ${port}`);
});
