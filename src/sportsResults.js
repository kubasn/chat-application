import axios from "axios"


let leagues = {
  premierleague:['4328','38'],
  ekstraklasa:['4422','31'],
  bundesliga:['4331','32'],
  laliga:['4335','34'],
  seriaA:['4332','35']
}


export async function sportsResults(league,round) {
    let results;
  try {
    const response = await axios.get(`https://www.thesportsdb.com/api/v1/json/3/eventsround.php?id=${leagues[league][0]}&r=${round}&s=2022-2023`);
    const events = response.data.events;
    if (!events) {
      return('No events found for the given date and league.');
    }
    results = (
      <>
    <h2>Here are the results, Let's bet on the match ⚽ </h2>
    <table style={{ border:'1px solid black', width: "100%"}}>
      <tr style={{backgroundColor:'#BDD2B6',textAlign:'center'}}>
        <th>Match</th>
        <th>Date</th>
        <th>Status</th>
        <th>Result</th>

      </tr>
      {events.map((event) => 
     <tr >< td style={{  fontWeight:"bold",color:'#3b7d44',textAlign:'center'}}>{event.strEvent}</td>
     <td style={{ textAlign:'center'}}>{event.dateEvent}</td>
     <td style={{  textAlign:'center'}} >{event.strStatus}</td>
     <td style={{  textAlign:'center'}}>{event.intAwayScore ? (`${event.intHomeScore}:${event.intAwayScore}`) : ('-')} </td>
     </tr>

    )}
      </table>
      </>
    )
  
    return results

  } catch (error) {
    return('Error fetching sports results. Try again')
  } finally {
  }

}



