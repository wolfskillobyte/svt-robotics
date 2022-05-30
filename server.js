const express = require('express');
const axios = require('axios');
const { parse } = require('path');

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

app.post('/api/robots/closest', (req, res) => {
  async function getRobots() {
    try {
      const response = await axios.get(
        'https://60c8ed887dafc90017ffbd56.mockapi.io/robots'
      );

      const robotData = response.data;
      // hardcoaded values for payload
      let payloadX = 10;
      let payloadY = 46;

      // loop through array
      for (var i = 0; i < robotData.length; i++) {
        // declare data needed in easy-to-read variables
        let x = robotData[i].x;
        let y = robotData[i].y;
        let robotId = robotData[i].robotId;
        let batteryLevel = robotData[i].batteryLevel;

        // formula to calculate distance
        const distance = Math.floor(
          Math.sqrt((payloadX - x) ** 2 + (payloadY - y) ** 2)
        );

        if (distance <= 10) {
          // formula to find highest battery

          console.log(
            `
                    RobotId: ${robotId}
                    Battery: ${batteryLevel}
                    Distance: ${distance}`
          );
        }
        // res.send(closest);
      }
    } catch (error) {
      console.log(error);
    }
  }
  getRobots();
});

app.listen(PORT, () =>
  console.log(`Application is running on http://localhost:${PORT}`)
);
