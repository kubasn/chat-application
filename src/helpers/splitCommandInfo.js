
//split command info example #results/bundesliga/30 -> bundesliga,30

const splitCommandInfo =(command)=> {
    let resultArray = command.split('/');
    resultArray[2] = resultArray[2].replace(/(\r\n|\n|\r)/gm, "");
    const league = resultArray[1]
    const round = resultArray[2]

    return {league,round}
}

export default splitCommandInfo