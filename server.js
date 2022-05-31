const express = require('express');
const axios = require('axios');
// const { parse } = require('path');
// const { response } = require('express');

const app = express();
const PORT = process.env.PORT || 5001;

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

      //   let maxBattery = Math.max(robotData.batteryLevel);

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

      console.log(newArr);

      res.send(newArr);
    } catch (error) {
      console.log(error);
    }
  }
  getRobots();
});

app.post('/api/robots/allClosest', (req, res) => {
  async function getAllClosest() {
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
      let allClosest = newArr.filter(function (e) {
        return e.distance <= 10;
      });
      console.log(allClosest);
      res.send(allClosest);
    } catch (error) {
      console.log(error);
    }
  }
  getAllClosest();
});

app.post('/api/robots/closest', (req, res) => {
  async function getClosest() {
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

      let closest = newArr.filter(function (e) {
        if (e.distance <= 10) {
          newArr.filter(Math.max(e.battery));
          return closest;
        }
      });
      console.log(closest);
      res.send('bbbb');
    } catch (error) {
      console.log(error);
    }
  }
  getClosest();
});

app.listen(PORT, () =>
  console.log(`Application is running on http://localhost:${PORT}`)
);
