//Written By: Kara Balsom
//Date Written: September 16, 2022

//http Core Global Object:

//The http module is a built-in global module in Node.js. It allows Node.js to transfer data over the HTTP. The http module is used to create a server to listen for HTTP requests on a given port, and respond  to the requests. The http module contains many methods for responding to different http requests, getting information on requests and responses, and more. In the program below, I will set up a server to listen on port 3000, and give node.js a way to respond to requests made from two paths, "/" and "/numbers".

const http = require("http"); //require("http"); allows access to the global http module in this file, and it is  assigned to the constant http.

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello!"); //This shows "Hello" on the browser when http://localhost:3000/ is opened.
    res.end(); //This line ends the response.
    console.log("Request from http://localhost:3000/ responded to."); //This line logs the message "Request from http://localhost:3000/ responded to." once the response is ended.
  }
  if (req.url === "/numbers") {
    //This means when a request comes in from http://localhost:3000/numbers it provides the following responses:
    res.write(JSON.stringify([1, 2, 3])); //Returns a string of numbers,[1, 2, 3], to the browser page http://localhost:3000/numbers. The JSON.stringify converts the numbers array to a string to be displayed.
    res.end(); //This line ends the response.
    console.log("Request from http://localhost:3000/numbers responded to."); //This line logs the message "Request from http://localhost:3000/numbers responded to." once the response is ended.
  }
}); //The .createServer() method creates a server. This server is an event emitter, with all the capabilities of an event emitter. An arrow function  is added within createServer(), that takes two parameters: request (req) and response (res). When a request is sent from http://localhost:3000/, it displays "Hello" on the browser. When the request is sent from http://localhost:3000/numbers, it displays [1, 2, 3].

server.listen(3000); //This line calls the server, and has it listen to the port that it is given as an argunment.

console.group("Listening on Port 3000..."); //This logs the message "Listening on Port 3000..." to the console.
