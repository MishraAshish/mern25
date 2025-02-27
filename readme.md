To Clone in your own machine -

when we do clone in our own repo 
git init 
git add README.md 
git add . 
git commit -m "first commit" 
git remote add origin https://github.com/MishraAshish/MERN25.git <use your own repo for committing data>
git push origin master

Next time to commit and push we follow - 
git add . 
git commit -m "subsequent commits" 
git push origin master

go to any directory where you want to clone and run below

git clone https://github.com/MishraAshish/mern25.git

git clone for the first time

subsequent times we need to run - git pull

if you have changes in your machine - so either you resolve that or use 
git reset --hard and then take git pull

git clean -fd 
git pull


we need to use "npm init" to initialize npm package manager for our repository

console.log("This is the first command in server.js"); 
console.log("as a dev dependency : npm i express -D"); 
console.log("as a production dependency : npm i express"); 
console.log("Node Monitoring Tool : npm i nodemon -D"); 
console.log("To Install All Modules present in package.json : npm i");

"version": "1.0.0", Major:Minor:Patch NPM - npm cli (command line interfaces)

To run the node api MERN25 cd - node-server run - npm i then - npm start

MERN25 cd - reactapp run - npm i then - npm start

important : npm i -command is used to install all dependencies mentioned in package.json important : npm i -command is used to install module in the project

http://localhost:9000/getproducts - a get api

npm init - to initialize the project 
npm install or npm i - to install module dependency 
npm uninstall or npm u - to uninstall module dependency 
npm install -D or npm i -D  <package name>   -> to install module dependency


//tools to install
Installation of below stuffs needed
//1. NODEJS
	https://nodejs.org/en/download/ 

//2. Visual Studio Code
	https://code.visualstudio.com/
	
//3. MongoDB and Compass - install as service - go for free version
	https://www.mongodb.com/
	
	Community Edition
	https://www.mongodb.com/try/download/community
	
	
	https://www.mongodb.com/try/download/enterprise
	
	Host : localhost:27017
	Cluster : Standalone
	Edition : MongoDB 6.0.0 Community (or above)
	
	mongodb-community server
	https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-6.0.0-signed.msi
	
	-- when we get an option to run mongodb as service

//4. GIT for windows and mac
    https://git-scm.com/downloads
   