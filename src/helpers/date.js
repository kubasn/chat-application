
//get current date format it and return as a string

const date = () => {
  const now = new Date();
  const year = now.getFullYear();
  let month = now.getMonth() + 1;
  month = month < 10 ? `0${month}` : `${month}`;

  let day = now.getDate();
  day = day < 10 ? `0${day}` : `${day}`;
  let hour = now.getHours();
  hour = hour < 10 ? `0${hour}` : `${hour}`;

  let minutes = now.getMinutes();
  minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

  const formattedDate =
    year + "-" + month + "-" + day + "T" + hour + ":" + minutes;
  return formattedDate;
};

export default date;
