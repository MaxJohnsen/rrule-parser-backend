const express = require('express');
const keys = require('./config/keys');

const app = express();

app.get('', (req, res) => {
  res.send('Success!');
});

// Heroku will set the environment variable with the appropriate port
const PORT = process.env.PORT || 5000;
app.listen(PORT);
