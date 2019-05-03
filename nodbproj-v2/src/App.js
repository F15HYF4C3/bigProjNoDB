import React, {Component} from 'react';
import './App.css';
import Next from './Components/Buttons/Next';
import Prev from './Components/Buttons/Prev';
import ProfileImg from './Components/Images/ProfileImg.js'
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
this.state = {
  "NFLTeams":[
    {
      "code":"",
      "fullName":"",
      "shortName":""
    }
]
}
}
  
componentDidMount(){
  axios.get(`http://localhost:3001/api/getData`).then(resp =>{
      console.log(resp.data);
      this.setState({});
    })
  }


render() {
  return (
    <div className="App">
<div className="banner"><h1>Fantasy Football Starter Draft Teams</h1></div>


     <div>

       

<section className="secTwo">
<Prev>Previous</Prev>

  <div className="playerCard">
 

    <ProfileImg>Player Name</ProfileImg>

    <div className="statistics">
       <div className="statBox" ><h3>Stats</h3></div>
       <div className="playerData" ><h3>Data</h3></div>
    </div>
  </div>
      
<Next>Next</Next>
</section>
     </div>

    </div>

  );
}
}

export default App;
