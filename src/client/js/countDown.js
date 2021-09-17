

//const currentDate = getcurrDate(sp);
/* function getcurrDate(sp) {
        today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth()+1; //JS counts month 0-11
        let yyyy = today.getFullYear();
        
        if(dd<10) dd='0'+dd;
        if(mm<10) mm='0'+mm;
        return (mm+sp+dd+sp+yyyy);
        console.log(curday('/'));
        console.log(curday('-'));
} */

//Countdown function calculates number of days between todays date and departure date
/* function countDown(departDate, currentDate) {
    const daystoDeparture =  currentDate - departDate;
} */

//Calculate One Day in milliseconds
const oneDay = 1000*60**24;
//Gives current time
const currentDate = new Date();
//Get the date user selected as a data value
const departDate = new Date(document.getElementById('departure').value);

//Could also use date.parse!

function countDown(departDate, currentDate, oneDay) {

//getTime method converts dates into milliseconds elapsed since 01/01/1970 (always using UTC timezone)
//Diff calculated in ms then converted to days
const daysToDepart = Math.round(departDate.getTime() - currentDate.getTime()) / (oneDay);
//Convert result to 0 decimal places
const daysToDepartRounded = daysToDepart.toFixed(0);

};



export { countDown };