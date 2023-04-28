function getTimeSince(timestampString) {
  // timestampString = "2023-04-28T12:00";
  console.log(timestampString)
   const timestamp = new Date(Date.parse(timestampString.replace(/\//g, "-"))); // Replace slashes with dashes to ensure proper parsing
   console.log(timestamp)
  const now = new Date();
  const diff = now.getTime() - timestamp.getTime(); // Difference in milliseconds
  const hours = Math.floor(diff / (1000 * 60 * 60)); // Convert milliseconds to hours

  if (hours < 24 && hours>1) {
    return `${hours} hours`;
  } else if (hours<=1) {
    return `less then an hour`;
  }
  
  else {
    const days = Math.floor(hours / 24);
    return `${days} days ago`;
  }
  }


  export default getTimeSince