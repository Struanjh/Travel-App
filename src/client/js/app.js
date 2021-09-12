


//Listen for user clicking submit button event, then call the asynnch function handleSubmit
const userCitySelection = document.getElementById('destination');
const userSearchSubmit = document.getElementById('searchButton');
userSearchSubmit.addEventListener('click', handleSubmit);


//'BRAIN FUNCTION - CONTROLLING FLOW OF WHOLE PROGRAMME WITH CHAINED PROMISES
async function handleSubmit(event) {

    //1) Call Geonames API to get latitude and longitude for the city the user selected
    const geoNamesData = await callGeoNames('http://localhost:8000/callGeoNames', userCitySelection)
    //Promise chaining
    //Once that data is returned - convert to JSON 
    .then(geoNamesData => geoNamesData.json())
    //Then call the OpenWeather API
    //Then call the Pixabay API
    //Then update the UI

}



//API Calls
//API Call Number 1 - Geonames
export async function callGeoNames(url, userInput) {
    //Use Fetch to post the data - since we use await, the function will not complete until the promise has resolved (we receive a response)
    let response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },       
        body: JSON.stringify({userInput}),
    })
//Once the response is received from index.js, return the response which will be stored in variable apiData & then converted to json
    return response
}


///NEED TO UPDATE THIS SECTION

//WE WANT TO GET LATITUDE, LONGITUDE AND COUNTRY!!

// Updates the UI so user can see the result of analysis
function updateUI(response) {
    subjectivity.innerHTML = `Subjectivity is ${response.subjectivity}`;
    agreement.innerHTML = `Agreement is ${response.agreement}`;
    irony.innerHTML = `Irony is ${response.irony}`;
    confidence.innerHTML = `Confidence (1-100%) is ${response.confidence}%`;
}



