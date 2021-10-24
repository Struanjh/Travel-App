
//import { handleSubmit } from '../Client/js/app';

//REQUIRE NPM PACKAGES

//Express is needed to run the server and set up route handlers
//const express = require('express')
import { express } from "express";
//Cross-origin-allowance - required when making requests across different domains
//const cors = require('cors');
import { cors } from "cors";
//An extra middle-ware layer used to handle POST Requests (by parsing the returned data)
//const bodyParser = require('body-parser');
import { bodyParser } from "body-parser";
//Allows for window.fetch compatible API on node.js runtime
//const fetch = require('node-fetch');
import { fetch } from "node-fetch";
//const path = require('path');
import { path } from "path";



//USE EXPRESS TO CREATE APP INSTANCE AND CONFIGURE THE APP (Express is a Node.js library)
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
 
//API Keys
const weatherBitKey = '1b0c8200ea404b3a86e03b1f12027712';
const pixaBayKey = '23681210-8dd7dc008b4f5966e8882bf52';

//GET ROUTES

//- When get request is made to root folder, serve the home page browser
app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
})

//Insert test Get Route here//



//POST ROUTES

//GEONAMES POST ROUTE -- when post request received to this route, callGeoNames function executes
app.post('/callGeoNames', getGeoNamesData);
app.post('/callWeatherBit', getWeatherBitData);
app.post('/callPixabay', getPixabayData);


//Note use of async keyword. THis gives access to await, try, catch - asynchronous function keywords
async function getGeoNamesData(req, res){
//Log out the URL the user requested for convenience and debugging
console.log(`User has requested the following URL: ${req.body}`);

/////////COMMENTING OUT THIS SECTION UNTIL I HAVE VALID GEONAMES ACCOUNT///////////
/*
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
*/

/////////TEMPORARY STATIC GEONAMES DATA///////////////////

const geonamesData = {"totalResultsCount":10494,"geonames":[{"adminCode1":"ENG","lng":"-0.12574","geonameId":2643743,"toponymName":"London","countryId":"2635167","fcl":"P","population":7556900,"countryCode":"GB","name":"London","fclName":"city, village,...","adminCodes1":{"ISO3166_2":"ENG"},"countryName":"United Kingdom","fcodeName":"capital of a political entity","adminName1":"England","lat":"51.50853","fcode":"PPLC"},{"adminCode1":"08","lng":"-81.23304","geonameId":6058560,"toponymName":"London","countryId":"6251999","fcl":"P","population":346765,"countryCode":"CA","name":"London","fclName":"city, village,...","adminCodes1":{"ISO3166_2":"ON"},"countryName":"Canada","fcodeName":"populated place","adminName1":"Ontario","lat":"42.98339","fcode":"PPL"},{"adminCode1":"05","lng":"27.91162","geonameId":1006984,"toponymName":"East London","countryId":"953987","fcl":"P","population":478676,"countryCode":"ZA","name":"East London","fclName":"city, village,...","adminCodes1":{"ISO3166_2":"EC"},"countryName":"South Africa","fcodeName":"seat of a second-order administrative division","adminName1":"Eastern Cape","lat":"-33.01529","fcode":"PPLA2"},{"adminCode1":"CT","lng":"-72.09952","geonameId":4839416,"toponymName":"New London","countryId":"6252001","fcl":"P","population":27179,"countryCode":"US","name":"New London","fclName":"city, village,...","adminCodes1":{"ISO3166_2":"CT"},"countryName":"United States","fcodeName":"populated place","adminName1":"Connecticut","lat":"41.35565","fcode":"PPL"},{"adminCode1":"CT","lng":"-72.07591","geonameId":4839843,"toponymName":"Norwich","countryId":"6252001","fcl":"P","population":39899,"countryCode":"US","name":"Norwich","fclName":"city, village,...","adminCodes1":{"ISO3166_2":"CT"},"countryName":"United States","fcodeName":"populated place","adminName1":"Connecticut","lat":"41.52426","fcode":"PPL"},{"adminCode1":"ENG","lng":"-0.13611","geonameId":12042156,"toponymName":"Inner London","countryId":"2635167","fcl":"L","population":3200000,"countryCode":"GB","name":"Inner London","fclName":"parks,area, ...","adminCodes1":{"ISO3166_2":"ENG"},"countryName":"United Kingdom","fcodeName":"region","adminName1":"England","lat":"51.51451","fcode":"RGN"},{"adminCode1":"ENG","lng":"-0.10609","geonameId":12042157,"toponymName":"Outer London","countryId":"2635167","fcl":"L","population":5000000,"countryCode":"GB","name":"Outer London","fclName":"parks,area, ...","adminCodes1":{"ISO3166_2":"ENG"},"countryName":"United Kingdom","fcodeName":"region","adminName1":"England","lat":"51.41006","fcode":"RGN"},{"adminCode1":"ENG","lng":"-0.10203","geonameId":12042173,"toponymName":"Central London","countryId":"2635167","fcl":"L","population":1533920,"countryCode":"GB","name":"Central London","fclName":"parks,area, ...","adminCodes1":{"ISO3166_2":"ENG"},"countryName":"United Kingdom","fcodeName":"region","adminName1":"England","lat":"51.52393","fcode":"RGN"},{"adminCode1":"ENG","lng":"0.12529","geonameId":12042174,"toponymName":"East London","countryId":"2635167","fcl":"L","population":2780086,"countryCode":"GB","name":"East London","fclName":"parks,area, ...","adminCodes1":{"ISO3166_2":"ENG"},"countryName":"United Kingdom","fcodeName":"region","adminName1":"England","lat":"51.55445","fcode":"RGN"},{"adminCode1":"ENG","lng":"-0.07656","geonameId":12042176,"toponymName":"South London","countryId":"2635167","fcl":"L","population":1804491,"countryCode":"GB","name":"South London","fclName":"parks,area, ...","adminCodes1":{"ISO3166_2":"ENG"},"countryName":"United Kingdom","fcodeName":"region","adminName1":"England","lat":"51.38948","fcode":"RGN"}]}
res.send(geonamesData);

}


//Async Function to get OpenWeather API Data
/* TO DO:
- Expected Challenges: CORS error, Converting Dates to appropriate format, distinguishing between current and future weather
*/

 async function getWeatherBitData(req, res) {
   
    //Test if departure data is more than 7 days in future and call appropriate API
    if (daysToDepartRounded < 7) {
    //Departure date less than 7 days away so get current weather
    let weatherBitData = await fetch(`https://api.weatherbit.io/v2.0/current?lat=${req.body.latitude}&lon=${req.body.longitude}&key=${weatherBitKey}&include=minutely`);
    } else {
    //Departure date is more than 7 days away so get future forecast
    let weatherBitData = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${req.body.latitude}&lon=${req.body.longitude}&key=${weatherBitKey}`);    
    }

   try {
    const weatherBitRes = await weatherBitData.json();
    if(weatherBitRes.status.code == 0) {
        weatherBitRes.message = "Data successfully retrieved!";
        res.send(weatherBitRes);
        }
    }
   catch(err) {
    console.log(err);
    res.send(err);
   }
 }


 async function getPixabayData (req, res) {
     let pixaBayImg = fetch(`https://pixabay.com/api/?key=${pixaBayKey}&q=${req.body.city}&orientation=horizontal&image_type=photo`);
    
     try {
        let pixaBayImgJSON = await pixaBayImg.json();
        if(pixaBayImgJSON.status.code == 0) {
            pixaBayImgJSON.message = "City image successfully retrieved!";
            res.send(pixaBayImgJSON);
        } else {
        //Make fetch call using country code instead of City
        let pixaBayImg = fetch(`https://pixabay.com/api/?key=${pixaBayKey}&q=${req.body.country}&orientation=horizontal&image_type=photo`);
        let pixaBayImgJSON = await pixaBayImg.json();
        pixaBayImgJSON.message = "Country image successfully retrieved!";
        res.send(pixaBayImgJSON);
        }
        }

       catch(err) {
        console.log(err);
        res.send(err);
       }
}


//export { geonamesData }
//export { getWeatherBitData }
//export { getPixabayData }