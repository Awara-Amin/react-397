//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

import React from "react";
import ReactDOM from "react-dom";

const writer = "amini";
const copyRight = 1988;
ReactDOM.render(
  <div>
    <h1>Hi Mate</h1>
    <p>The book written by {writer}</p>

    <p>The copy right date is {copyRight}</p>
  </div>,
  document.getElementById("root")
);
