const router = require('express').Router();
const url = 'https://60c8ed887dafc90017ffbd56.mockapi.io/robots';
const axios = require('axios');
// router.use('/router', url);

axios.get(url).then((response) => {
  console.log(response.data);
});

// router.get('/robots', (req, res) => {
//   res.send('robots');
// });

module.exports = router;
