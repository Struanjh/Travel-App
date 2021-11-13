

import { handleSubmit } from './app.js';


const inputValidation = (userCitySelection) => {

    const oneDay = 24 * 3600 * 1000;
    let currentDate = new Date();
    let departDate = document.getElementById('departure').value;
    let arrivalDate = document.getElementById('arrival').value;
    let currDateMS = Date.parse(currentDate);
    let arrivalDateMS = Date.parse(arrivalDate);
    let departDateMS = Date.parse(departDate);
    console.log(`City: ${userCitySelection}`);
    console.log(`departDate: ${departDate}`);
    console.log(`arriveDate: ${arrivalDate}`);

    //Calculate how long the trip lasts
    let tripLength = (arrivalDateMS - departDateMS) / oneDay;
    console.log(`Trip Length is ${tripLength} days`);

    //Calculate how many days until the departure date
    let daysToDepart = Math.floor((departDateMS - currDateMS) / oneDay);
    console.log(`There are ${daysToDepart} days until departure`);


    if(userCitySelection === '' || departDate === '' || arrivalDate === '') {
        throw new Error('All 3 form fields must be completed!');
        return Error;
    } else if (currDateMS > departDateMS) {
       throw new Error('Departure Date must be in the future!');
        return;
    } else if (departDate > arrivalDate) {
        throw new Error('Departure date must be before arrival date!'); 
        return;
    } else {
        return [daysToDepart, tripLength];
    }
};


export { inputValidation };





