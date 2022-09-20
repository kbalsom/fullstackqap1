//Written By: Kara Balsom
//Date Written: September 19, 2022

//console Core Global Object:

//The console module in Node.js provides a simple debugging console. The global module does not have to be called. The console module can return standard output (stdout), or standard errors (stderr). It is useful to note that stderr is written synchronously, meaning until the output is written, nothing else will be processed. console methods accept three characters: %s, %d, and %j. %s is used to insert a string, %d is used to insert an integer, and %j is used to insert JSON data. I will demonstrate some uses of the console module in the program below.

const example = "First Example"; ////This line assigns the string "First Example" to the constant "example". It is used below to insert the string into a message to be logged on the console.

console.log("Logging %s to the Console.", example); //This logs the message "Logging to the Console" to the console using the .log() method. It is stdout. It uses %s to insert the constant "code", which is an string, into the message.

const code = 7; //This line assigns the integer 7 to the constant "code". It is used below to indicate an error number.

console.error("Error %d", code); //This line uses the .error() method to print out a stderr. It uses %d to insert the constant "code", which is an integer, into the message.

const warn = "Warning"; //This line assigns the string "Warning" to the constant "warn". It is used below to It is used below to insert the string into a message to be logged on the console.

console.warn(`This is a ${warn}`); //This line uses the .warn() method to print out the message "This is a Warning". The .warn() message is used to print out a warning message, but, unlike the .error() method, it is stdout.

console.info("This is Information"); //This line uses the .info()) method to print out "This is Information" in stdout. The .info() method functions like the .log() method, but indicates that it contains information.

console.table([
  { colour: "red", number: 1 },
  { colour: "green", number: 2 },
]); //The .table() method logs a table to the console. Here it takes an array that contains objects with a colour and a number each, and creates a table with a colour column and a number column.

// console.clear(); //This line uses the .clear() method to clear the console. I have left it commented out because it will clear all of the information that appears on the console from the code above.
