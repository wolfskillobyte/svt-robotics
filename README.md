# svt-robotics

## Purpose

The provided API returns a list of robots in a fleet. Each object in the array contains the robot's ID number, battery life, and xy-coordinates.
The goal is to write an API endpoint that accepts a POST request of a load that needs to be moved to the provided endpoint. Example of POST request data:

```js
{
  loadId: 231,
  x: 56,
  y: 39
}
```

A successful request would return the closest robot within 1-10 distance units from load. If more than one robot is returned, return one with the highest battery life. Example of returned data:

```js
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

Here is how the application appears and functions in Insomnia.

<img src='./imgs/svt-robotics.gif' />

## Walkthrough

The following video shows the routes being tested in Insomnia.

- [YouTube](https://youtu.be/vw02AhneU6Y)

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

This was a straightforward and fun back-end assignment that challenged what I would normally build with JS applications. Insomnia was a helpful tool in testing this data to provide an easier-to-read format as opposed to utilizing the console alone.

If I were to expand on this project, I would make an API front-end that would accept more `GET`, `POST`, `PUT`, and `DELETE` requests. A simple React front-end is also viable if this code were to be regularly interacted with by users or employees. React's useState feature would have provided a quick solution, but would have deterred me from challenging myself on problem-solving with JS alone. Because this was a smaller project, the code has been condensed to one file, although this isn't always good practice for scaling applications. If this were to become larger, I would seperate the routes from `server.js` by utilizing the aspects of the MVC paradigm, especially if a front-end was implemented.

If I were to improve upon the code I have written, I would focus on optimizing my code to find a better algorithm. Working with algorithms is less familiar territory, which made this challenge more enjoyable and rewarding, and I hope to learn more in the future.

Thanks for reading, all feedback is welcome.

<a href="mailto:sraewolfskill@gmail.com">
  <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" />
 </a>
