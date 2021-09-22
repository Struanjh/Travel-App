
//Listen for user clicking submit button event, then call the async function handleSubmit
const userCitySelection = document.getElementById('destination');
const userSearchSubmit = document.getElementById('searchButton');
userSearchSubmit.addEventListener('click', handleSubmit);




//'BRAIN FUNCTION - CONTROLLING FLOW OF WHOLE PROGRAMME WITH CHAINED PROMISES
async function handleSubmit(event) {
    //Call Countdown timer function to days until departure
    //const daysToDepart = await countDown(departDate, currentDate, oneDay);
    //Call Geonames API to get latitude and longitude for the city the user selected
    const geoNamesData = await callGeoNames('http://localhost:8000/callGeoNames', userCitySelection)
    //Promise chaining
    //Once that data is returned - convert from String to JSON 
    .then(geoNamesData => geoNamesData.json())
    //Then call the OpenWeather API
    //.then(await callWeatherBit('http://localhost:8000/callWeatherBit', latitude, longitude))
    //Then call the Pixabay API
    //Then update the UI
    .then(
        function(response) {
            updateUI(response)
        }
    )
}


//API Calls
//API Call Number 1 - Geonames
export async function callGeoNames(url, userInput) {
    //Use Fetch to post the data to server.js post route - since we use await, the function will not complete until the promise has resolved (we receive a response)
    let response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },       
        body: JSON.stringify({userInput}),
    })
//Once the response is received from server.js, return the response which will be stored in variable geonamesData & then converted to json
    return response
}


//API Call Number 2 - Weatherbit

/*export async function callWeatherBit(url, latitude, longitude) {

}*/


//WE WANT TO GET LATITUDE, LONGITUDE AND COUNTRY!!

// Updates the UI so user can see the result of analysis
function updateUI(response) {
    //Just logging the response for now to check if API call is working
    console.log(userCitySelection);
    console.log(response.latitude);
    console.log(response.longitude);
}

export { updateUI };
export { handleSubmit };

