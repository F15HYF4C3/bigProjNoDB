import React, {Component} from 'react';
// import axios from 'axios';

import './players.css'

class Players extends Component {
        constructor(props) {
          super(props);
this.state = {

    Players:[
        {
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
        },
            {
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
//     displayPlayer(this.state.count)
// }
 nextPlayer(playerId){
    let playerList = this.state.Players.slice()
    // axios.get(`https://www.fantasyfootballnerd.com/service/players/json/dw68ms8krkjr`)
    .then(resp =>{
      playerList.push(resp.data);
    })
}



render(){
    return (
      <div className="Players">
  <Players/>
  <section className="secTwo">  
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
  </section>
       </div>
  
//       </div>
  
    );
 }
}

      //   axios.get(`https://www.fantasyfootballnerd.com/service/players/json/dw68ms8krkjr`).then(resp =>{
    //     console.log(resp.data)
    //   })
    
      
         

export default Players