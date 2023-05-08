

const sortByDate = (messages)=> {

let newMessages = [...messages].sort((a, b) => {
    const dateA = new Date(a.timestamp);
    const dateB = new Date(b.timestamp);
  
    // Sort in ascending order (earliest to latest)
    return dateA - dateB;
  
    // If you want to sort in descending order (latest to earliest), you can swap the positions of dateA and dateB
    // return dateB - dateA;
  });
  return newMessages
}

export default sortByDate;