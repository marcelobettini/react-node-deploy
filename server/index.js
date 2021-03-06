// server/index.js
const path = require("path")
const express = require("express");
const data = require("./data/pokemon.json")

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.resolve(__dirname, "../client/build")))

app.get("/api", (req, res) => {
    res.json(data);
});

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', "index.html"))
})

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});