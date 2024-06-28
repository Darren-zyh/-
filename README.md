# Social Runner Server

## Running the Program

First use createdatabase.js to create the database, then the code should work by running node server.js. If it does not run, I think the problem will be with the collections and in particular line 27 can be removed and the code should then run. I would then shut this server off and add line 27 back in and then run the server. I am not quite sure why this is an issue, and indeed has only happened once so far but this appears to be the solution. 

## Installation

These are the packages the need to be installed before-hand and are all in package.json and package-lock.json

## Running the Server

After installing the dependencies, you can start the server. In the terminal, run the following command:

node server.js

Once the server is running, you should see a message indicating that the server is  Connected to MongoDB and  listening on a specific port. You can then access the Social Runner app by opening a web browser and navigating to the appropriate URL, typically http://localhost:<port>.

## Once in the App

Then the app will run, and you can register users and then press log-in. The interface should be fairly intuitive and you can press buttons to be taken to the different sections of the app. The buttons are clear and should work well throughout, other than the display map after searching for a run – the reason for this is explained in the report. To see runs that your user has joined pess the display calendar button where you will see an interface containing all the runs with clear colours for the ones that you have joined and that you have not joined. 
