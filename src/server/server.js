
//REQUIRE NPM PACKAGES


//USE EXPRESS TO CREATE APP INSTANCE AND CONFIGURE THE APP (Express = Node.js library)


//SPIN UP SERVER



//DYNAMICALLY BUILDING URL's

//Geonames URL Format: http://api.geonames.org/searchJSON?q=london&maxRows=10&username=demo

const geonamesUrlRoot = 'http://api.geonames.org/searchJSON?q=';
const geonamesMaxRows = '&maxRows=10';
const geonamesUsername = '&username=Struan94';
 


//Set Up Get Routes

//Set Up Post Routes

//GEONAMES POST ROUTE -- when post request received to this route, callGeoNames function executes
app.post('/callGeoNames', callGeoNames);


//Note use of async keyword. THis gives access to await, try, catch - asynchronous function keywords
async function callGeoNames(req, res){
//Log out the URL the user requested for convenience and debugging
console.log(`User has requested the following URL: ${req.body}`);
//Dynamically build the GeoNames API URL
const geonamesUrl = geonamesUrlRoot + req.body.userCitySelection + geonamesMaxRows + geonamesUsername;
//Log out the full URL used to make the Fetch request for convenience and debugging
console.log(geonamesUrl);

//MAKE THE FETCH REQUEST TO THE GEONAMES API & WAIT FOR A RESPONSE
const geonamesResponse = await fetch(url);

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