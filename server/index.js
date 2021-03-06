const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Hello World')
});

app.listen(port, () => {
  console.log(`Lisening on port ${port}`);
});