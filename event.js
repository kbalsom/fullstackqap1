//Written By: Kara Balsom
//Date Written: September 18, 2022

//events Core Global Object:

//Every action that takes place in a Node.js application is called an event. Node.js is built around events, and handles them asynchronously, meaning not just one at a time. The events module in Node.js is used to create events, called event emitting, and listen for events, by using listeners. Listeners are registered, which means they are set up to listen for a certain event. When that event is emitted, they are invoked. In the program below, I will set up 3 listeners that will listen for an event called "connection". I will emit the "connection" event, and remove the listeners. I will also use .listeners(), .listenerCount(), and .eventNames() to keep track of how many listeners are listening, which ones are listening, and what events are happening at various points throughout the program.

const EventEmitter = require("events"); //This line of code imports the event module to this file, and assigns it the constant "EventEmitter". EventEmitter is a class, so it must be written in CamelCase.

const emitter = new EventEmitter(); //This line creates an instance of the EventEmitter code. The constant "emitter" is an object. This line allows us to use the methods and properties contained within the EventEmitter class, by using the object "emitter".

emitter.on("connection", function listener1() {
  console.log("Listener 1 is invoked.");
}); //This line creates a listener. A listener is a function that is invoked when an event occurs. The method .on() creates the listener, and takes two arguments. The first argument, in this case "connection", specifies the name of the event the listener is listening for. The second argument is the callback function, which is what will happen when the event occurs. In this case, the callback function is listener1, and it will log the message "Listener 1 is invoked" to the console. The .on() method puts no restrictions on how many times the listener can be called, and it will be invoked everytime the event it is listening for occurs.

emitter.on("connection", function listener2() {
  console.log("Listener 2 is invoked.");
}); //This line also creates a listener using the .on() method. In this case, the callback function is listener2, and it will log the message "Listener 2 is invoked" to the console.

emitter.once("connection", function listener3() {
  console.log("Listener 3 is invoked.");
}); //This line also creates a listener. However, it uses .once(), which means it will only be invoked the next time the event occurs. After that, it is remover then invoked. This means a listenerCount() method will not catch it listening if the listenerCount() appears after the event is emitted, because it is removed before being invoked. In this case, the callback function is listener3, and it will log the message "Listener 3 is invoked" to the console.

var dataCount = emitter.listenerCount("connection"); //This line uses the listenerCount() method. It will count the number of listeners listening for the event "connection", which it takes as an argument. It is assigned the variable dataCount. This listenerCount catches listener3, because it appears before the event is emitted below, and listener3 is removed.
console.log(`There are ${dataCount} listeners listening.`); //This line logs the results of dataCount to the console.

emitter.emit("connection"); //The .emit() method synchronously calls all of the listeners listening for the "connection" event, which it takes as an argument.
console.log("Connection event emitted."); //This line logs the message "Connection event emitted" to the console.

var dataCount = emitter.listenerCount("connection"); //This line uses the listenerCount() method. It counts the number of listeners actively listening for the event "connection", which it takes as an argument. It is assigned the variable dataCount. This listenerCount will not register listener3, as it has already occured once and will be removed at this point. So the result will be 2 listeners.
console.log(`There are ${dataCount} listeners listening.`); //This line logs the results of dataCount to the console.

var eventNames = emitter.eventNames(); //The method .eventNames() returns an array containing the names of events that have listeners. In this case, the only event with listeners actively listening is "connection". In this case, .eventNames is assigned to the variable eventNames, and it takes no arguments.
console.log(`The type of events happening are: ${eventNames}.`); //This line logs the results of eventNames to the console.

var listeners = emitter.listeners("connection"); //The .listeners() method returns an array containing the function names of the listeners actively listening to an event, which it takes as an argument. In this case, the event is "connection", and the .listeners() method is assigned the variable listeners.
console.log("The function names of the listeners are:");
console.log(listeners); //This line logs the results of listeners to the console.

emitter.removeAllListeners("connection"); //The .removeAllListeners() method removes all the listeners listening for a specific event, which it takes as an argument. In this case, the event is "connection".
console.log("All listeners are removed."); //This line logs the message "All listeners are removed" to the console.

var dataCount = emitter.listenerCount("connection"); //This line runs the listenerCount() method again. Now that all the listeners have been removed, it will return a value of 0.
console.log(`There are ${dataCount} listeners listening.`); //This line logs the results of dataCount to the console.
