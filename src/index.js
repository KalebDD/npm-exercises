"use strict";
const _ = require('lodash');
const $ = require('jquery');
const niceMessage = require('./say-hello.js');


console.log(niceMessage());

const sayHello = () => {
    console.log("Hello!");
};
sayHello();

$('.title').css('background-color', 'red');

function changeBackground() {
    $('.test').css('background-color', 'green');
}

setInterval(changeBackground, 3000);