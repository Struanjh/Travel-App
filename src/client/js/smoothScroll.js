
//FUNCTIONALITy 1 - Smooth Scroll Behaviour

//Store Variables
const searchNav = document.querySelector('a.search');
const searchTarget = document.getElementById('search');
const resultsNav = document.querySelector('a.results');
const resultsTarget = document.getElementById('results');


//Add event listeners to nav li's

// searchNav.addEventListener('click', smoothScroll(searchTarget));
// resultsNav.addEventListener('click', smoothScroll(resultsTarget));



// export const smoothScroll = (targetDesintation) => {
//     //event.preventDefault();
//     targetDesintation.scrollIntoView({behaviour: "smooth"});
// }

searchNav.addEventListener('click', (e) => {
    e.preventDefault();
    searchTarget.scrollIntoView({behavior: "smooth"});
})

resultsNav.addEventListener('click', (e) => {
    e.preventDefault();
    resultsTarget.scrollIntoView({behavior: "smooth"});
})



//FUNCTIONALITY 2 - Identify the current section of page on nav menu