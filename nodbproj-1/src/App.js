import React, {Component} from 'react';
//import axios from 'axios'
import Players from './components/NFL Players/Players';
import './App.css';
import './index';
import './index.css';
import './components/Drafted List/myTeam';
import './components/PlayerData/PlayData'
import './components/PlayerStats/PlayStats'
import './components/profileImg';
import './serviceWorker';

class App extends Component {

  constructor(props){
    super(props);
    // const API_KEY = '';
    this.state = {
        "Players":[{
  "playerId":"",
  "active":"",
  "jersey":"",
  "lname":"",
  "fname":"",
  "displayName":"",
  "team":"",
  "position":"",
  "height":"",
  "weight":"",
  "dob":"",
  "college":""
}
  ]
  }
}

// componentDidMount(){
//   axios.get(`https://www.fantasyfootballnerd.com/service/players/json/dw68ms8krkjr`).then(resp =>{
//     console.log(resp.data) this.setState({})
//   })
// }
// nextPlayer(playerId){
//   let playerList = this.state.Players.slice();
//   axios.get(`https://www.fantasyfootballnerd.com/service/players/json/dw68ms8krkjr`).then(resp =>{
//     playerList.push(resp.data);
//   })

render(){

  return (
    <div className="App">
<div className="banner"><h1>Fantasy Football Starter Draft</h1></div>

<Players/>
     <div>

       

<section className="secTwo">
<button>Previous</button>

  <div className="playerCard">
 

    <div className="profileImg">
    {/* <img src="https://picsum.photos/200/200/200"></img> */}
       <h3 className="playerName">Player Name</h3>
    </div>

    <div className="statistics">
       {/* <div className="statBox" ><h3>Stats</h3></div>
       <div className="playerData" ><h3>Data</h3></div> */}
    </div>
  </div>
      
<button>Next</button>
</section>
     </div>

    </div>

  );
}
}

export default App;
