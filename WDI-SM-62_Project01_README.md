# WDI-SM-62: Project ONE ... by Joy Serquiña)
### Build a Full Stack App
I have created a full stack app for "Girls Who Hike LA" for members to create a profile where they can save and track their completed City Slicker Challenge hikes, and look up hikes near their current location, as well as look up hikes to be completed.

Currently the model for submitting your completed hikes is to put together an email with yor photos showing your hike was completed.  I intend as one of my stretch goals to add the ability for the user to upload their photo directly through the app.
### Preview
![Full Desktop View of my Portfolio page](https://i.imgur.com/oduDsj5.png)

### Mobile Preview
![Full Screencapture of my Portfolio page in Mobile form] (https://i.imgur.com/ucZRsbm.png)

### My Process
#####Pre-Coding:
1. I started by writing out my idea and jotting down the two models/Schemas that intend to incorporate in my app. 
2. Then went on to sketching out wireframes of each section as shown here:
	1a & 1b Landing and Portfolio page ![Landing Page](https://i.imgur.com/ZamMXTg.jpg]
	!1e & 1f.[1c & 1d About/Skills Page](https://i.imgur.com/jNKaYt8.jpg) About me /Skills page and Contact/Testimonial page
	 Quotes/Testimonial Page
	1f. Contact form
2. Also sketched a tablet/mobile version: ![Tablet wireframe sketch](https://i.imgur.com/JUJZAPS.jpg)
3. I then created my user stories in trello to list the actions they would take, what they would see etc: ![Screencapture of trello to do list](https://i.imgur.com/UbPS9LE.png).
5. Talked through my ideas/ processes with Zac and Alex for approval.
6. Create a new git repo for the project.

#####Setting up the Database & Authentication:
1. Created and set up my database and mLab.
2. Set up the authentication.
3. Set up the CRUD-able resource for my User Model Schema.
4. Set up the CRUD-able resource for my Hike model Schema.
5. Connected my front-end and back-end.

#####Setting up the functionality:
1. Created a forEach loop to iterate through the hikes in my database to show the data on my "Take a Hike" page.
2. Created a map.js to write the function to embed my google map of all the hike locations... unfortunately I was unable to get the locations to populate on the map despite being able to ping the Google Maps API to create a map.
3. Connected the path on the buttons for each hike location to the addUser method.
4. Upon connecting the functionality for the addUser/addHike button, enabled it so it populates as a completed hike on the User's Profile page.
5. Had difficulty completing the remove button (save for Stretch Goal).
6. In the meantime using a 404 page for users that click the same hike twice.  I need to fix it because it still adds it to the User's Array as well as the Hike's array twice when it's supposed to skip.

#####Styled the site:
1. Tested out EJS and bootstrap to figure out how to utilize those tools.
2. Used EJS, Bootstrap, and CSS to style my pages.

#####Pushed to Heroku:
1. Saved to Github during each major save/change.
2. Saved and deployed to Heroku successfully earlier in the week... unfortunately upon attempting to deploy on Thursday it came across some errors.
3. Managed to deploy to Heroku but upon testing it calls an internal error when clicking on "Take a Hike" page.
4. Since I was having errors with the Heroku API I attempted to use the Leaflet Map API I found.

##### Technologies Used
16. Used the following:
17. HTML5 / EJS Layouts to build the structure and layout of the views based on the wireframes I sketched out in the beginning.
18. CSS3 / Bootstrap to adjust the spacing and general form/navbar functionality.
19. JavaScript was used to create the functionality of the routes/paths/buttons/form submissions to communicate with the back-end. 
20. MongoDB/mLab, Postman, Node.js, Express, were used to build, test and develop the back-end database.
21. Used Trello to track my daily goals and productivity as well.

#####Installation and set up for a client LOCALLY
1. They would log into their computer's terminal.
2. They would submit a request to pull a copy of my branch for my project.
3. Upon approval they would use the clone link to open/download my project.
4. They would then run npm init -y (to initiate node).
5. They would run npm install --save + (express, mongoose, morgan, dotenv, bcrypt-nodejs, connect-flash, connect-mongodb-session, cookie-parser,ejs, express-ejs-laouts, express-session, method-override, passport, & passport-local.
6. 

##Unsolved Problems:
* Upon clicking a hike a second time (if it has already been clicked) while it does lead you to a 404 page saying the hike has already been clicked it STILL adds it to the Hike's Users Array and vice versa... I want to add two to three functions to this: disable the button upon clicking, enable the undo/remove User button, and/or toggle the button so it's like a like button so it can switch between the two functions of complete/incomplete.
* I want to put the hike locations on the map.
*BONUS: I wanted to add flash messages for when the user either inputs the wrong password or email and/or the user does not exist and needs to sign up.
* *Bonus: add validation to contact form to make sure user has filled out all required fields before submitting.
* *Bonus: add functionality for carousel to swipe while using an iPad/iPhone.

* I need/want to get better at writing cleaner & dry-er.

## Wins :)
*Got my authentication and database set up pretty early on and fully functioning CRUD for my User model Schema !.
*Got the add User button so that it pushes the Hike into the User array and is displayed on the User's profile page.
*Was able to use a Card-Body Scroll for my list of hikes so you can scroll through the hikes to stay next to the map.

### Credits:
*Joy Serquiña

### Designed and Developed by: Joy Serquiña 
*![Joy's github personal info/link](https://github.com/essjay05)
*![Link to live site hosted up on gh-pages](https://essjay05.github.io/WDI-SM-62_ProjectZERO)


