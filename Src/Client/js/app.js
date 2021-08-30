
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