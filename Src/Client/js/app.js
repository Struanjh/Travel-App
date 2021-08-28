
//FUNCTIONALITy - Smooth Scroll Behaviour

//alert("Script working!");//

//NEW//
//STORE navitems in list//
const navItems = document.querySelectorAll('nav li');
const divs = document.querySelectorAll('div');

//Note below function assumes the target section has same class or id name as the link being clicked on
//Loop through each navItem
for (navItem of navItems) {
    //Set clickTarget as current navItem
    const clickTarget = navItem;
    //Set scrollTarget as div with corresponding className
    //-> 2 Steps to do this
    //1 Store className of current navItem in variable
    const targetClass = navItem.className;
    //2 Select div with equivalent className to current navItem
    const scrollTarget = divs.targetClass;
    //Call Smoothscroll function
    smoothScroll(clickTarget, scrollTarget);
}

function smoothScroll(clickTarget, scrollTarget) {
    clickTarget.addEventListener('click', (e)=>{
        e.preventDefault;
        scrollTarget.scrollIntoView({behaviour: "smooth"})
    })
}