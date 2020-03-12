"use strict";
const _ = require('lodash');
const $ = require('jquery');

const sayHello = () => {
    console.log("Hello!");
};
sayHello();

$('.title').css('background-color', 'red');

function changeBackground() {
    $('.test').css('background-color', 'green');
}

setInterval(changeBackground, 3000);