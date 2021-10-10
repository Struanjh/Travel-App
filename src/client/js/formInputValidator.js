
import { renderError } from './renderErrors.js';
import { handleSubmit } from './app.js';

//Calculate One Day in milliseconds
const oneDay = 24 * 3600 * 1000;
//Gives current time
const currentDate = new Date();
//Get the departure date user selected as a date object
const departDate = new Date(document.getElementById('departure').value);
//Get the departure date as a string to check format..
const departDateString = departDate.toLocaleString('en-GB', {day:"numeric", month: "numeric", year: "numeric"});
//Get the arrival date user selected as a date object
const arrivalDate = new Date(document.getElementById('arrival').value);
//Get the departure date as a string to check format..
const arrivalDateString = arrivalDate.toLocaleString('en-GB', {day:"numeric", month: "numeric", year: "numeric"});

//REGEX Expression to ensure date is in dd/mm/yyyy format
//https://www.the-art-of-web.com/javascript/validate-date/
const dateFormat = /^\d{1,2}\/\d{1,2}\/\d{4}$/;


const inputValidation = () => {

    if(userCitySelection === null || departDate === null || arrivalDate === null) {
        renderError('Error! All 3 form fields must be completed!');
        return errMsg;
    } else if (!departDateString.match(dateFormat)) {
        renderError('Error! Departure Date must be in DD/MM/YYYY Format!')
    } else if (!arrivalDateString.match(dateFormat)) {
        renderError('Error! Arrival Date must be in DD/MM/YYYY Format!')
    } else if (currentDate > departDate) {
        renderError('Error! Departure Date must be in the future!');
    } else if (departDate > arrivalDate) {
        renderError('Error! Departure date must be before arrival date!')   
    } else {
        countDown(departDate, currentDate, oneDay);
    }
};

function countDown(departDate, currentDate, oneDay) {

//GET NUMBER OF DAYS UNTIL DEPARTURE AND NUMBER OF DAYS BETWEEN ARRIVAL AND DEPARTURE!!!!!!!// 

//getTime method converts dates into milliseconds elapsed since 01/01/1970 (always using UTC timezone)
//Diff calculated in ms then converted to days
const daysToDepart = new Date(departDate - currentDate) / (oneDay);
//Convert result to 2 decimal places
const daysToDepartRounded = daysToDepart.toFixed(2);
console.log(daysToDepartRounded);
return daysToDepartRounded;

}


export { inputValidation };
export { countDown };
