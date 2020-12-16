/* eslint-disable */

import "./style.css";

window.onload = () => {
  document.querySelector("#the-excuse").innerHTML = generateExcuse();

  console.log("Hello Console");
};

let randomNumber = number => {
  return (randomNumber = Math.random() * number);
};

let generateExcuse = () => {
  let who = [
    "The dog ",
    "My grandma ",
    "His turtle ",
    "My bird ",
    "Their jogger ",
    "Her racoon ",
    "That driver "
  ];
  let action = [
    "ate ",
    "peed ",
    "crushed ",
    "broke ",
    "took ",
    "yelled at ",
    "stole ",
    "bit "
  ];
  let what = ["my homework ", "the keys ", "the car ", "my toe", "the shoes"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying",
    "on the street",
    "in my house"
  ];

  //.length
  let whoI = Math.floor(randomNumber(who.length));
  let actionI = Math.floor(randomNumber(action.length));
  let whatI = Math.floor(randomNumber(5));
  let whenI = Math.floor(randomNumber(6));

  let excuse = who[whoI] + action[actionI] + what[whatI] + when[whenI];
  return excuse;
};
