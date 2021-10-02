
//FUNCTIONALITy 1 - Smooth Scroll Behaviour

//Store Variables
const searchNav = document.querySelector('li.search');
const searchTarget = document.getElementById('search');
const resultsNav = document.querySelector('li.results');
const resultsTarget = document.getElementById('results');


//Add event listeners to nav li's
searchNav.addEventListener('click', event => {
    event.preventDefault;
    searchTarget.scrollIntoView({behaviour: "smooth"});
});

resultsNav.addEventListener('click', event => {
    event.preventDefault;
    resultsTarget.scrollIntoView({behaviour: "smooth"});
});


searchNav.addEventListener('click', smoothScroll(event, searchTarget));
resultsNav.addEventListener('click', smoothScroll(event, resultsTarget));

export const smoothScroll = (event, targetDesintation) => {
    event.preventDefault();

}

//FUNCTIONALITY 2 - Identify the current section of page on nav menu