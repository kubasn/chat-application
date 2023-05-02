


const date = () => {

const now = new Date();
const year = now.getFullYear();
let month = now.getMonth() + 1; // Add 1 to get month from 1 to 12 instead of 0 to 11
 month = month < 10 ? `0${month}` : `${month}`;
 
 let day = now.getDate();
 day = day < 10 ? `0${day}` : `${day}`;
let hour = now.getHours();
hour = hour < 10 ? `0${hour}` : `${hour}`;

let minutes = now.getMinutes();
minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

const formattedDate = year + "-" + month + "-" + day + "T" + hour + ":" + minutes;
return formattedDate; // Outputs something like "2023/4/28/9/30"

}

export default date;