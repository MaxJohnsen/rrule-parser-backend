const express = require('express');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
const rrule = require('rrule');
const rrulestr = require('rrule').rrulestr;

const app = express();

app.use(bodyParser.json());

app.post('/parse/', (req, res) => {
  try {
    const { rrule, fromDate, startAfter } = req.body;

    const r = rrulestr(rrule);

    res.send({ dates: r.all(), friendlyText: r.toText() });
  } catch (err) {
    console.log(err);
    res.send({ error: err.message });
  }
});

// Heroku will set the environment variable with the appropriate port
const PORT = process.env.PORT || 5000;
app.listen(PORT);
