# svt-robotics

## Purpose

```md
The provided API returns a list of robots in a fleet. Each object in the array contains the robot's ID number, battery life, and xy-coordinates. 
The goal is to write an API endpoint that accepts a payload of a load that needs to be moved, and makes an HTTP request to the provided endpoint. Example:

```js
// these numbers are placeholders and don't represent the given data
{
  loadId: 231,
  x: 56,
  y: 39
}
```

A successful request would return the closest robot within 1-10 distance units from load. If more than one is returned, return one with the highest battery life. Example of returned data: 

```js
// these numbers are placeholders and don't represent the given data
{
    robotId: 27,
    distanceToGoal: 7, 
    batteryLevel: 30 
}
```


## Table of Contents

- [Preview](#Preview)
- [Walkthrough](#walkthrough)
- [Installation](#Installation)
- [Tests](#Tests)
- [Documentation](#Documentation)
- [Review](#Review)

---

## Preview

Here is how the application appears and functions in Insomnia

<img src='' />

## Walkthrough

The following videos show the routes being tested in Insomnia.

- [YouTube]()

## Installation

The instructions for this project can be found [here](https://github.com/SVT-Robotics/recruiting-takehome-services).

_This project requires Node.js and other dependencies_

- [How to install Node](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

Navigate to the directory of choice using the CLI and then clone this repository:

```bash
git clone git@github.com:wolfskillobyte/svt-robotics.git
```

Use `npm i` to install dependencies.

Start the server

```bash
node server
```

## Tests

The POST and GET routes can be tested through Insomnia or similar programs.

_This project used Insomnia for testing_

<a href="https://docs.insomnia.rest/">
  <img src="https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE" />
</a>

## Documentation

- [npm](https://docs.npmjs.com/)
- [Express](https://expressjs.com/en/4x/api.html)
- [Axios](https://axios-http.com/docs/intro)

## Review

Overall, this was a very straightforward and fun back-end assignment that challenged what I would normally build with JS applications. I wanted to focus on solving this problem purely on the back-end, even though I could have easily solved it faster by setting up a simple HTML page to handle POST data or a even an API front-end. Programs such as Insomnia are immensely helpful in testing this data and provide an easier-to-read format in contrast to utilizing the console alone. 

If I were to expand on this, I would make an API front-end that would accept more GET, POST, PUT, DELETE requests. 
A simple React front-end is also viable if this code were to be regularly interacted with by users or employees. React's useState feature would have provided a very simple solution, but would have deterred me from challenging myself on problem-solving with JS. Working with algorithms is less familiar territory, which made this challenge more enjoyable and rewarding.
