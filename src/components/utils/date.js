


const date = () => {

const now = new Date();
const year = now.getFullYear();
let month = now.getMonth() + 1; // Add 1 to get month from 1 to 12 instead of 0 to 11
 month = month < 10 ? `0${month}` : `${month}`;
const day = now.getDate();
const hour = now.getHours();
const minutes = now.getMinutes();

const formattedDate = year + "-" + month + "-" + day + "T" + hour + ":" + minutes;
return formattedDate; // Outputs something like "2023/4/28/9/30"

}

export default date;