const now = new Date();
const dayofmonth = now.getDate();
const dayofweek = now.getDay();

const monthIndex = now.getMonth();
const year = now.getFullYear();

const weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function date() {
    return (
        `Day: ${weeks[dayofweek]} \nMonth: ${months[monthIndex]} \nYear: ${year} \nDate: ${dayofmonth} \n${now.toTimeString()}`
    );

    
}

console.log(date());
