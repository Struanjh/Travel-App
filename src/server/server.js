
//REQUIRE NPM PACKAGES

//Express is needed to run the server and set up route handlers
const express = require('express')
//Cross-origin-allowance - required when making requests across different domains
const cors = require('cors');
//An extra middle-ware layer used to handle POST Requests (by parsing the returned data)
const bodyParser = require('body-parser');
//Allows for window.fetch compatible API on node.js runtime
const fetch = require('node-fetch');



//USE EXPRESS TO CREATE APP INSTANCE AND CONFIGURE THE APP (Express = Node.js library)
const app = express();
//Explaining how we want the data to be dealt with  
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
//This directs the server to the folder we want to use to run the client-side code
app.use(express.static('dist'))

//SPIN UP SERVER
const port = 8000;
const server = app.listen(port, listening);
function listening() {
    console.log("server running");
    console.log(`running on local host: ${port}`);
};


//DYNAMICALLY BUILDING API URL's

//Geonames URL Format: http://api.geonames.org/searchJSON?q=london&maxRows=10&username=demo

const geonamesUrlRoot = 'http://api.geonames.org/searchJSON?q=';
const geonamesMaxRows = '&maxRows=10';
const geonamesUsername = '&username=Struan94';
 


//GET ROUTES

//- When get request is made to root folder, serve the home page browser
app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
})

//Insert test Get Route here//




//POST ROUTES

//GEONAMES POST ROUTE -- when post request received to this route, callGeoNames function executes
app.post('/callGeoNames', getGeoNamesData);


//Note use of async keyword. THis gives access to await, try, catch - asynchronous function keywords
async function getGeoNamesData(req, res){
//Log out the URL the user requested for convenience and debugging
console.log(`User has requested the following URL: ${req.body}`);
//Dynamically build the GeoNames API URL
const geonamesUrl = geonamesUrlRoot + req.body.userCitySelection + geonamesMaxRows + geonamesUsername;
//Log out the full URL used to make the Fetch request for convenience and debugging
console.log(geonamesUrl);

//MAKE THE FETCH REQUEST TO THE GEONAMES API & WAIT FOR A RESPONSE
const geonamesResponse = await fetch(geonamesUrl);

//IF THE RESPONSE IS SUCCESSFUL (PROMISE RESOLVES) - EXECUTE TRY CODE BLOCK
try {
    const geonamesData = await res.json();
    if(geonamesData.status.code == 0) {
        geonamesData.message = "Data successfully retrieved!";
        res.send(geonamesData);
    } else {
        console.log("Data was not retrieved!!");
    }
//IF THE RESPONSE IS UNSUCCESSFUL -  EXECUTE CATCH CODE BLOCK
} catch(err) {
    console.log(err);
    res.send(err);
}

}