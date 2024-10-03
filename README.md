 ## Todo App

 This project contains a simple TODO application

 It has the following features -

 -Anyone can create a TODO.
 -Anyone can see their existing TODOS.
 -Anyone can mark a TODO as done.

 The project will be divided into 2 parts -

 - Backend (IT SHOULD BE MADE FIRST)
 - Frontend

## BACKEND

 make a folder in your project section (backend)
 go to that folder in the terminal (cd backend)
-- and in the terminal run npm init

 now some questions iwll be asked like what name you want to give to your package
-package name: (backend) todo-backend
-version: (1.0.0)                                                  
-description:  this is a simple todo application backend            
-entry point: (index.js)                                            
-test command: (leave it empty)                                                     
-git repository:(leave it empty)                                                
-keywords:(leave it empty)                                                            
-author: "Aamash Alvi"
-license: (ISC)

after all these questions answered in the terminal you will have an package.json{} in your backend folder.


now run npm install express
- now after installing when you will open you package.json{} you will se a file added "dependencies": {
    "express": "^4.19.2"
  }
-  dependencies is a place where all the external dependencies you are using are listed

after all this install the zod library for types.js
- npm install zod

after all this isnstall the mongoose library for db.js
-npm install mongoose

##  FRONTEND

-go to the maine file of your project by cd..

- open the terminal and run->

- run -> npm create vite@latest

- create a name of your folder or project 

- now select react 

- then select javaScript

- after that to that folder in the terminal by => cd frontend

-now run -> npm install (to install all the external libraries)

-and in the end run-> npm run dex (to see your project live)