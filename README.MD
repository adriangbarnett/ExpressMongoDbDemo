#Very basic Express, ejs, mongo DB web server framework

-------------------------------------
npm setup
-------------------------------------
npm init
npm install dotenv
npm install path
npm install express
npm install body-parser
npm install mongoose


-------------------------------------
.env Setup
-------------------------------------
You need remote or local mongo db running
Create a .env file then add the following

    MYPORT=3000
    MYMODE=dev
    DB_URL=mongodb+srv://XXXXXXXX@cluster0.euffl.mongodb.net/YYYYYYYY?retryWrites=true&w=majority


Where XXXXXXXX is your Mongo DB auth string / url
Where YYYYYYYY is your Mongo DB database name


-------------------------------------
Run the applciation.
-------------------------------------
nodemon localhost 3000
Open a web browser and navogate to:
    http://localhost:3000/
    http://localhost:3000/auth