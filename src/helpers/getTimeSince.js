function getTimeSince(timestampString) {
  const timestamp = new Date(Date.parse(timestampString.replace(/\//g, "-"))); 
  const now = new Date();
  const diff = now.getTime() - timestamp.getTime(); 
  const hours = Math.floor(diff / (1000 * 60 * 60)); 

  if (hours < 24 && hours > 1) {
    return `${hours} hours`;
  } else if (hours <= 1) {
    return `less then an hour`;
  } else {
    const days = Math.floor(hours / 24);
    return `${days} days ago`;
  }
}

export default getTimeSince;
