const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5001;

app.get('/', (req, res) => {
  axios
    .get('https://60c8ed887dafc90017ffbd56.mockapi.io/robots')
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(PORT, () =>
  console.log(`Application is running on http://localhost:${PORT}`)
);
