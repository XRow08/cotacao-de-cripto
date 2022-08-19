const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/cotacao-de-cripto'));

app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/dist/cotacao-de-cripto/index.html');
});

app.listen(PORT, () => {
  console.log('pronto' + PORT);
});
