// express 모듈 추가
const express = require("express");
const app = express();
// 서버 실행 포트
const port = 3001;

const pokemons = [
  {
    name: "이상해씨",
    address: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/000101.png",
  },
  {
    name: "파이리",
    address: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/000401.png",
  },
  {
    name: "꼬부기",
    address: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/000701.png",
  },
];

// poke
app.get("/pokemon/:id", (req, res) => {
  res.send(
    `<img src='${pokemons[req.params.id].address}' alt='${req.params.id}'></img>
    <h1>${pokemons[req.params.id].name}</h1>
    `
  );
});

// get 요청 처리문
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/about.html");
});

// 404
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/404.html");
});

// 서버오픈
app.listen(port, () => {
  console.log(`Server is open`);
});
