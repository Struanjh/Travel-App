
//FUNCTIONALITy 1 - Smooth Scroll Behaviour

//Store Variables
const searchNav = document.querySelector('a.search');
const searchTarget = document.getElementById('search');
const resultsNav = document.querySelector('a.results');
const resultsTarget = document.getElementById('results');


//Add event listeners to nav li's

searchNav.addEventListener('click', (e) => {
    e.preventDefault();
    searchTarget.scrollIntoView({behavior: "smooth"});
})

resultsNav.addEventListener('click', (e) => {
    e.preventDefault();
    resultsTarget.scrollIntoView({behavior: "smooth"});
})


