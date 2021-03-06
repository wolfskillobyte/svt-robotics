const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);

app.use(express.static('public'));

///////////////////////////////////////
app.get('/api/robots', (req, res) => {
  axios
    .get('https://60c8ed887dafc90017ffbd56.mockapi.io/robots')
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

/////////////////////////////////////////////////
app.post('/api/robots/payloadForAll', (req, res) => {
  async function getRobots() {
    try {
      const response = await axios.get(
        'https://60c8ed887dafc90017ffbd56.mockapi.io/robots'
      );

      // hardcoaded values for payload
      let payloadX = 23;
      let payloadY = 12;

      // declare data needed in easy-to-read variables
      const robotData = response.data;

      let newArr = Object.values(
        robotData.map((element) => ({
          robotId: Number(element.robotId),
          battery: element.batteryLevel,
          distance: Number(
            Math.floor(
              Math.sqrt(
                (payloadX - element.x) ** 2 + (payloadY - element.y) ** 2
              )
            )
          )
        }))
      );
      // console.log(newArr);
      res.send(newArr);
    } catch (error) {
      console.log(error);
    }
  }
  getRobots();
});

//////////////////////////////////////////////////
app.post('/api/robots/allClosest', (req, res) => {
  async function getAllClosest() {
    try {
      const response = await axios.get(
        'https://60c8ed887dafc90017ffbd56.mockapi.io/robots'
      );

      // declare data needed in easy-to-read variables
      const robotData = response.data;
      // init variables
      let loadId;
      let payloadX;
      let payloadY;
      // set variables to incoming post data
      loadId = req.body.loadId;
      payloadX = req.body.payloadX;
      payloadY = req.body.payloadY;

      let newArr = Object.values(
        robotData.map((element) => ({
          robotId: Number(element.robotId),
          battery: element.batteryLevel,
          distance: Number(
            Math.floor(
              Math.sqrt(
                (payloadX - element.x) ** 2 + (payloadY - element.y) ** 2
              )
            )
          )
        }))
      );
      let allClosest = newArr.filter(function (e) {
        return e.distance <= 10;
      });
      // console.log(allClosest);
      res.send(allClosest);
    } catch (error) {
      console.log(error);
    }
  }
  getAllClosest();
});

/////////////////////////////////////////////
app.post('/api/robots/closest', (req, res) => {
  async function getClosest() {
    try {
      const response = await axios.get(
        'https://60c8ed887dafc90017ffbd56.mockapi.io/robots'
      );

      // declare data needed in easy-to-read variables
      const robotData = response.data;
      // init variables
      let loadId;
      let payloadX;
      let payloadY;
      // set variables to incoming post data
      loadId = req.body.loadId;
      payloadX = req.body.payloadX;
      payloadY = req.body.payloadY;

      // new variable holds new array of objects
      // the new objects contain the information that we want
      // robotId, battery, and distance.
      // distance is calculated with the formula given
      let newArr = Object.values(
        robotData.map((e) => ({
          robotId: Number(e.robotId),
          battery: e.batteryLevel,
          distance: Number(
            Math.floor(Math.sqrt((payloadX - e.x) ** 2 + (payloadY - e.y) ** 2))
          )
        }))
      );

      // init new variable that will filter closest robots
      // this being referenced is optional
      let filterTwice;
      // array of closest will be filtered array within 10 units
      filterTwice = newArr.filter(function (e) {
        // let maxBattery = Math.max(e.battery);
        return e.distance <= 10;
      });

      // console.log(filterTwice);

      // sort our array to find highest battery
      const bestRobot = filterTwice.sort(function (a, b) {
        return parseFloat(b.battery) - parseFloat(a.battery);
      });

      // console.log(bestRobot[0]);

      // send robot data
      res.send(bestRobot[0]);
    } catch (error) {
      console.log(error);
    }
  }
  getClosest();
});

app.listen(PORT, () =>
  console.log(`Application is running on http://localhost:${PORT}`)
);
