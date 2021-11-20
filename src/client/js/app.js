


import { inputValidation } from "./formInputValidator";

//Global variables
let error = document.getElementById('error');
let result = document.getElementById('results');


//'BRAIN FUNCTION - CONTROLLING FLOW OF WHOLE PROGRAMME WITH CHAINED PROMISES
export async function handleSubmit(event) {
    event.preventDefault();
    try {
    const userCitySelection = document.getElementById('destination').value;
    //Call Input Validation function and pass in the user's city as an argument
    const days = inputValidation(userCitySelection);
    const daysDepart = days[0];
    const lengthOfTrip = days[1];
    console.log(daysDepart);
    console.log(lengthOfTrip);
    
   
    //Call Geonames API to get latitude and longitude for the city the user selected
    const geoDataResponse = await callGeoNames('http://localhost:8000/callGeoNames', userCitySelection);
    if(!geoDataResponse.ok) throw new Error('Issue getting geoNames data!!');
    //Once that data is returned - convert from JSON (String) to JS Object
    const geoDataJSON = await geoDataResponse.json();
    console.log(geoDataJSON);
    const latitude = geoDataJSON.geonames[0].lat;
    const longitude = geoDataJSON.geonames[0].lng; 
    console.log(latitude, longitude);


    //Then call the OpenWeather API
    const weatherBitResponse = await callWeatherBit('http://localhost:8000/callWeatherBit', daysDepart, latitude, longitude);
    if(!weatherBitResponse.ok) throw new Error('Issue getting weather data!!');
    const weatherDataJSON = await weatherBitResponse.json();
    console.log("Weatherbit response converted to JS Object:");
    console.log(weatherDataJSON);
    //Store country and city returned from weatherBit API
    const weatherBitCity = weatherDataJSON.city_name;
    const weatherBitCountry = weatherDataJSON.country_code;
    const weatherBitMinTemp = weatherDataJSON.min_temp;
    const weatherBitMaxTemp = weatherDataJSON.max_temp;
    const weatherBitDescription = weatherDataJSON.description;


    //Then call the Pixabay API
    const pixaBayResponse = await callPixaBay('http://localhost:8000/callPixaBay', weatherBitCity, weatherBitCountry);
    if(!pixaBayResponse.ok) throw new Error('Issue getting city image!!');
    const pixaBayResponseJSON = await pixaBayResponse.json();
    //Get URL of the returned Image
    const pixaBayImgURL = await pixaBayResponseJSON.webformatURL;
    console.log(pixaBayImgURL);

    //Test for results//

    console.log(
        "geoDataJSON, weatherDataJSON, pixaBayResponseJSON",
        geoDataJSON, weatherDataJSON, pixaBayResponseJSON
    );


    //Call the Update UI with the response objects received from server
    updateUI(userCitySelection, lengthOfTrip, daysDepart, weatherDataJSON, pixaBayResponseJSON);
    }

    //If any errors occur, they'll be passed to the catch code block through the err variable, and displayed in the app
    catch(err) {
    //let error = document.getElementById('error')
    result.innerHTML = `<div id="results"><div>`;
    error.innerHTML = `
                    <p>**${err}</p>
                    `
    error.scrollIntoView({behavior: "smooth"});
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
export async function callWeatherBit(url, days, latitude, longitude) {
    console.log(`Weatherbit days sent to server is ${days}`);
    console.log(`Weatherbit lat sent to server is ${latitude}`);
    console.log(`Weatherbit days sent to server is ${longitude}`);
    let response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },       
        body: JSON.stringify({days, latitude, longitude}),
    })
    console.log("Weatherbit response is:");
    console.log(response);
    return response;
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




//////Try to log the results to the console for now...////////
export const updateUI = (city, length, days, weather, pixa) => {
        error.innerHTML = `<p></p>`;
        result.innerHTML = `
        <div id="results">
            <div class="results-card">
                <img src="${pixa.hits[0].webformatURL}" alt="">
                <div class="results-content">
                        <h4><b>${city}</b></h4>
                        <p>You depart for ${city} in ${days} days!</p>
                        <p>Your trip lasts for ${length} days!</p>
                        <p>The weather conditions will be ${weather.data[0].weather.description}, and the average temperature will be ${weather.data[0].temp}&nbsp;℃
                </div>
            </div>    
        </div>
        `;
        result.scrollIntoView({behavior: "smooth"});
}


