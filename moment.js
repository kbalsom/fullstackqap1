//Written by: Kara Balsom
//Date Written: September 19, 2022

//I installed the Moment npm, which parses, validates, manipluates, and displays dates and times.

const moment = require("moment"); ////Load the "express" module to "server.js" file by using require(). This returns a function, which is assigned to the constant "express".

var rightNow = moment(); //Calling moment() without any parameters gives the current date and time. It is assigned the variable "rightNow".
console.log(rightNow); //This will log the results of the moment() above to the console using the variable "rightNow".

var currTime = moment().format("LTS"); //The .format() method converts a current time or date into a specific format that is passed in. The format "LTS" will result in the current time to the second. It is assigned the variable "currTime"
console.log(currTime); //This will log the results of the moment().format() above to the console using the variable "currTime".

var age = moment("19920223", "YYYYMMDD").fromNow(); //By providing my birth date, and the format in which I provided it, the fromNow() method will calculate how long I have been alive. It rounds up to the nearest year.
console.log(age); //This will log the results of the fromNow() method above to the console using the variable "age".

var subtract = moment().subtract(101, "days").calendar(); // The subtract() method subtracts a given amount of time from the current date or time. the .calendar gives the current date or time. The .subtract() is passed the amount of time, and the type of time (days, months, seconds, etc.) to subract.
console.log(subtract); //This will log the results of the .subtract() method above to the console using the variable "subtract".

var midnight = moment().endOf("day").fromNow(); //The .endOf() method calculates how long until the end of a given time or date. The fromNow() indicates that it should calculate from the current date/ time, and the "day" passed in means it will calculate how long until the end of the day from now.
console.log(midnight); //This will log the results of the .endOf() method above to the console using the variable "midnight".
