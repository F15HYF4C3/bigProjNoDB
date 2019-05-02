import React, {Component} from 'react';
import './App.css';
// import Next from './Components/Buttons/Next'
import ProfileImg from './Components/Images/ProfileImg.js'
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
this.state = {
Players:[
  {
      playerId:"",
      active:"",
      jersey:"",
      lname:"",
      fname:"",
      displayName:"",
      team:"",
      position:"",
      height:"",
      weight:"",
      dob:"",
      college:""
  },
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
<div className="banner"><h1>Fantasy Football Starter Draft</h1></div>


     <div>

       

<section className="secTwo">
<button>Previous</button>

  <div className="playerCard">
 

    <ProfileImg>Player Name</ProfileImg>

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
