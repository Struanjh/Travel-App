
//FUNCTIONALITy 1 - Smooth Scroll Behaviour

//Store Variables
const searchNav = document.querySelector('li.search');
const searchTarget = document.getElementById('search');
const resultsNav = document.querySelector('li.results');
const resultsTarget = document.getElementById('results');


//Add event listeners to nav li's and call function
searchNav.addEventListener('click', smoothScroll(e, searchTarget));
resultsNav.addEventListener('click', smoothScroll(e, resultsTarget));


//Smoothscroll function
function smoothScroll(event, targetDestination) {
    event.preventDefault;
    targetDestination.scrollIntoView({behaviour: "smooth"});
};

//FUNCTIONALITY 2 - Identify the current section of page on nav menu




//'BRAIN FUNCTION - CONTROLLING FLOW OF WHOLE PROGRAMME WITH CHAINED PROMISES
const userCitySelection = document.getElementById('destination');

async function handleSubmit(event) {

    const geoNamesData = await callGeoNames('http://localhost:8000/callGeoNames', userCitySelection)
    //Promise chaining
    //Once that data is returned - convert to JSON 
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


// Updates the UI so user can see the result of analysis
function updateUI(response) {
    subjectivity.innerHTML = `Subjectivity is ${response.subjectivity}`;
    agreement.innerHTML = `Agreement is ${response.agreement}`;
    irony.innerHTML = `Irony is ${response.irony}`;
    confidence.innerHTML = `Confidence (1-100%) is ${response.confidence}%`;
}


export { handleSubmit }
export { updateUI }
