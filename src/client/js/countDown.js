
const departDate = document.getElementById('departure');
const currentDate = getcurrDate(sp);
function getcurrDate(sp) {
        today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth()+1; //JS counts month 0-11
        let yyyy = today.getFullYear();
        
        if(dd<10) dd='0'+dd;
        if(mm<10) mm='0'+mm;
        return (mm+sp+dd+sp+yyyy);
        console.log(curday('/'));
        console.log(curday('-'));
}

//Countdown function calculates number of days between todays date and departure date
function countDown(departDate, currentDate) {
    const daystoDeparture =  currentDate - departDate;
}
