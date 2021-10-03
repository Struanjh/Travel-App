





//'BRAIN FUNCTION - CONTROLLING FLOW OF WHOLE PROGRAMME WITH CHAINED PROMISES
async function handleSubmit(event) {
    try {
    //Call Countdown timer function to days until departure
    const daysToDepart = await countDown(departDate, currentDate, oneDay);
    //Call Geonames API to get latitude and longitude for the city the user selected
    const geoDataResponse = await callGeoNames('http://localhost:8000/callGeoNames', userCitySelection);
    if(!geoDataResponse.ok) throw new Error('Issue getting geoNames data!!');
    //Once that data is returned - convert from String to JSON 
    const geoDataJSON = await geoNamesData.json();
    console.log(geoDataJSON);
    const latitude = geoDataJSON.lat;
    const longitude = geoDataJSON.lng;
    console.log(latitude, longitude);


    //Then call the OpenWeather API
    const weatherBitResponse = await callWeatherBit('http://localhost:8000/callWeatherBit', latitude, longitude);
    if(!weatherBitResponse.ok) throw new Error('Issue getting weather data!!');
    const weatherDataJSON = await weatherBitResponse.json();
    console.log(weatherDataJSON);
    //Store country and city returned from weatherBit API
    const weatherBitCity = weatherDataJSON.city_name;
    const weatherBitCountry = weatherDataJSON.country_code;

    //Then call the Pixabay API
    const pixaBayResponse = await callPixaBay('http://localhost:8000/callPixaBay', weatherBitCity, weatherBitCountry);
    if(!pixaBayResponse.ok) throw new Error('Issue getting city image!!');
    const pixaBayResponseJSON = await pixaBayResponse.json();
    console.log(pixaBayResponseJSON);
    //Get URL of the returned Image
    const pixaBayImgURL = pixaBayResponseJSON.webformatURL;



    //Then update the UI
    //UpdateUI(City Location, Temperature, Image, Weather Icon)
    }
    catch(err) {
    console.log(err);
    renderError(err.message);
    }
}



////////POST DATA TO THE SERVER////////////

//POST REQUEST 1 - Geonames
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


//POST REQUEST 2 - Weatherbit
export async function callOpenWeather(url, latitude, longitude) {
    let response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },       
        body: JSON.stringify({latitude, longitude}),
    })
    return response
}


//POST REQUEST 3 - Pixabay
export async function callPixaBay(url, city, country) {
    let response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },       
        body: JSON.stringify({city, country}),
    })
    return response
}



/*
// Updates the UI so user can see the result of analysis
function updateUI(response) {
    //Just logging the response for now to check if API call is working
   //console.log(userCitySelection);
   // console.log(response.latitude);
   // console.log(response.longitude);
}*/

export { updateUI };
export { handleSubmit };

