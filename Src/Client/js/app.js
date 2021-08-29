
//FUNCTIONALITy - Smooth Scroll Behaviour

//alert("Script working!");//

//NEW//
//STORE navitems in list//
/*const navItems = document.querySelectorAll('nav li');
const divs = document.querySelectorAll('div');

//Note below function assumes the target section has same class or id name as the link being clicked on
//Loop through each navItem
for (navItem of navItems) {
    //Set clickTarget as current navItem
    const clickTarget = navItem;
    //Get NavItem ClassName (which will be same as target ID)
    const targetClass = navItem.className;
    //Set the scrolltarget
    const scrollTarget = divs.targetClass;
    //Call Smoothscroll function
    smoothScroll(clickTarget, scrollTarget);
}

function smoothScroll(clickTarget, scrollTarget) {
    clickTarget.addEventListener('click', (e)=>{
        e.preventDefault;
        scrollTarget.scrollIntoView({behaviour: "smooth"})
    })
}*/

var navs = document.getElementsByTagName('li');
var sNav = navs[0];
var rNav = navs[1];

sNav.id = 'pink';
rNav.id = 'pink';

   /* searchNav.addEventListener('click',(e)=>{
    e.preventDefault;
    searchNav.scrollIntoView({behaviour: "smooth"});
})*/

