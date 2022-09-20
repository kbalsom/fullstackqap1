//Written by: Kara Balsom
//Date Written: September 19, 2022

//I installed the Express npm, which provides a framework for web and mobile applicatons. In the code below, I set up a very rudimentary framework for the website "Dog World". It will contain a homepage ("/") that says "Welcome to Dog World!", and a page ("/dogs") that contains three breeds of dogs. Each breed is assigned an id, and you can use that id to navigate to a page specific to that breed. ("/dogs/1") is a page about Labrador Retrievers. ("/dogs/2") is a page about Huskies. ("/dogs/3") is a page about Labrador Retrievers.

const express = require("express"); //Load the "express" module to "server.js" file by using require(). This returns a function, which is assigned to the constant "express".

const app = express(); //This line assigns the function "express" to the constant "app". This represents the application.

const dogs = [
  { id: 1, name: "labrador" },
  { id: 2, name: "husky" },
  { id: 3, name: "pitbull" },
]; //This line creates an array named dogs. Each object in the array contains an id and a name.

app.get("/", (req, res) => {
  res.send("Welcome to Dog World!");
  console.log("Response sent to path '/'");
}); //The .get() method of Express sets up how to handle GET requests. GET requests are used to request data from a specified resource. In this case, the path "/" is requesting data, and the callback function will respond by sending the message "Welcome to Dog World!". This message will be displayed on the browser. The .get() method takes two parameters: the path, and the callback function. Once a response is sent, it will log the message "Response sent to path '/'" to the console.

app.get("/dogs", (req, res) => {
  res.send(dogs);
  console.log("Response sent to path '/dogs'");
}); //This is the same as above, except the path is "/dogs". So when http://localhost:3000/dogs requests data, the callback function will respond with the array contained within the constant "dogs". So [{"id":1,"name":"labrador"},{"id":2,"name":"husky"},{"id":3,"name":"pitbull"}] will be displayed on the browser. Once a response is sent, it will log the message "Response sent to path '/dogs'" to the console.

app.get("/dogs/:id", (req, res) => {
  const dog = dogs.find((c) => c.id === parseInt(req.params.id));
  if (!dog) res.status(404).send("Dog not found");
  res.send(dog);
  console.log("Response sent to path '/dogs/id");
}); //This uses the .get()method for responding to requests that come from the various pathways set up with the ids from the "dogs" array. A dog breed is assigned an id in the "dogs" array, and each id can be a pathway, example "/dogs/1" should display the object { id: 1, name: "labrador" }. In the callback function, the req.params property is in object that captures the value specified by the pathway, in this case id. So it takes pathway "/dogs/1" and captures the 1, so the data being requested is the data pertaining to the object in the dogs array assigned the id: 1. The parseInt() takes the string value from req.params.id and returns an integer. That integer is passed into the .find() method, which searches the "dogs" array for the object that was assigned the integer as the id. Finally, the constant "dog" is assigned to the results returned, in this case the object in the array "dogs" that has the specified integer as an id. If the integer is not assigned, the callback function uses the res.status() method to respond with a 404 error, and displays the message "Dog not found". Otherwise, it responds with the object from the "dogs" array, reprensented by the constant "dog". Once a response is sent, it will log the message "Response sent to path '/dogs/id'" to the console.

const port = process.env.PORT || 3000; //The process.env property returns an object containing the user environment. In this case, it will return what port the user is using, and assigns it to the constant "port". The || 3000 means that if there is no specified port, it will resort to using port 3000. This makes sure that this program works on whatever port the user is using.

app.listen(port, () => {
  console.log(`Listening on Port ${port}`);
}); //This uses the .listen() method to create a listener on the specified port. In this case, the constant "port" was assigned the value of the port above. It logs the message "Listening on Port (port)" to the console.
