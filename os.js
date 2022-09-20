//Written By: Kara Balsom
//Date Written: September 19, 2022

//os Core Global Object:

//The os module in Node.js provides information about the operating system. It can be used to provide user information, memory data, platform information, load averages, host information, and much more. In the following program I will demonstrate some of the information the os module can return.

const os = require("os"); //require("os"); allows access to the global http module in this file, and it is  assigned to the constant os.

var totalMemory = os.totalmem(); //os.totalmem() is a method contained in the os module. It returns the total memory of the operating system in bytes. This assigns the constant totalMemory to the os.totalmem() method.
console.log(`Total Memory: ${totalMemory}`); //This displays the results of the os.totalmem() method by logging the constant totalMemory to the console.

var freeMemory = os.freemem; //os.freemem() is a method contained in the os module. It returns the amount of free memory available in bytes. This assigns the constant freeMemory to the os.freemem() method.
console.log(`Free Memory: ${freeMemory}`); //This displays the results of the os.freemem() method by logging the constant freeMemory to the console.

var operatingSystem = os.type(); //os.type() is a method contained in the os module. It returns the name of the operating system. This assigns the constant operatingSystem to the os.type() method.
console.log(`OS Name: ${operatingSystem}`); //This displays the results of the os.type() method by logging the constant operatingSystem to the console.

var hostName = os.hostname(); //os.hostname() is a method contained in the os module. It returns the host name of the operating system. This assigns the constant hostName to the os.hostName() method.
console.log(`Host Name: ${hostName}`); //This displays the results of the os.hostName() method by logging the constant hostName to the console.

var architecture = os.arch(); //os.arch() is a method contained in the os module. It returns the operating system's CPU architecture. This assigns the constant architecture to the os.arch() method.
console.log(`OS CPU Architecture: ${architecture}`); //This displays the results of the os.arch() method by logging the constant architecture to the console.

var release = os.release(); //os.release() is a method contained in the os module. It returns the information about the operating system's release.  This assigns the constant architecture to the os.arch() method.
console.log(`OS Release Information: ${release}`); //This displays the results of the os.release() method by logging the constant release to the console.

var userInfo = os.userInfo(); //os.userInfo() is a method contained in the os module. It returns information about the current user. It returns the uid (Unique Identifier), the gid (Group Identifier), the username, the home directory name, and the shell name. This assigns the constant userInfo to the os.userInfo() method.
console.log("Current User Information:");
console.log(userInfo); //This displays the results of the os.userInfo() method by logging the constant userInfo to the console.

var loadAverages = os.loadavg(); //os.loadavg() is a method contained in the os module. It returns an array, which contains three numbers that identify the 1, 5, and 15 minute load averages. This assigns the constant loadAverages to the os.loadavg() method.
console.log(`Load Averages: ${loadAverages}`); //This displays the results of the os.loadavg() method by logging the constant loadAverages to the console.
