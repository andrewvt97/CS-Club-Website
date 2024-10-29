# CS-Club-Website
A website for computer science club members to showcase their work and connect with other members. This readme is meant for comp sci club members who are learning to create their own full stack project.

App was created using the following steps: (This is just an explanation for when you need to create your own full stack applications).
mkdir CS-Club-Website // create the project directory
cd CS-Club-Website // go into the project directory
mkdir frontend // create frontend folder in project folder
mkdir backend // create backend folder in project folder
npm init -y // initialize the node project
npm install express mongoose dotenv cors // database for storing data
npm install nodemon --save-dev // autoreloading the server
cd frontend // go into the frontend folder
npm create vite@latest --template react // create a react project using vite
npm install axios // install axios ( a tool for API calls)

What you need to do 
Click on the green code button in the repository.
Option 1: (What I use) You may need to create an ssh key. (Search up a tutorial on how to do that.) 
Click on SSH in the green code button section and copy the link
Next, open your terminal and go to a folder where you want the CS-Club-Website directory to be created. 
You can enter git clone (url that you copied) and the CS-Club-Website folder will be created
Option 2: Or you can use HTTPS instead to get the project to your computer (search up a tutorial)
Option 3: You can also use Github Desktop to get the project to your computer if working with the terminal is hard for you. (Search up a tutorial)

You should install vs-code and set up everything such as extensions or so on.
Install node on your computer.
in vs code create two terminals. One for the backend and one for frontend. The folders are already in the project from the github.
In one terminal: 
cd backend // in the main project go into the backend folder. The file path should look like  .../CS-Club-Website/backend
npm run dev // if this fails you might need to install one of the commands like npm install nodemon --save-dev (refer to the above section and read the errors)
If it says server is running on port 3000: go to http://localhost:3000/ (This is the backend server on your local computer)
In the second terminal: 
npm install vite --save-dev // install vite on your computer
npm run dev // click on the link to see the frontend on your computer (if there are problems just look at the error code and resolve it)

