const express = require('express');
const router = require('./router');

const app = express();
const PORT = process.env.PORT || 3001;

// parse incoming JSON data
app.use(express.json());
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(PORT, function () {
  console.log(`now listening on port ${PORT}`);
});
