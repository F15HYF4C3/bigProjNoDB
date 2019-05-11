import React, {Component} from 'react';
import './App.css';
import Next from './Components/Buttons/Next/Next';
import Prev from './Components/Buttons/Prev/Prev';
import ProfileImg from './Components/Images/ProfileImg';
import axios from 'axios';
import DraftList from './Components/DraftList/DraftList';
import Accept from './Components/Buttons/Accept/Accept';
import Reject from './Components/Buttons/Reject/Reject';

class App extends Component {
  constructor(props) {
    super(props);
this.state = {
  NFLTeams:[],
    code:"",
    fullName:"",
    shortName:"",
    number: 0,
    profile: "",
    FaveList: []

}


this.displayNext = this.displayNext.bind(this);
this.displayPrev = this.displayPrev.bind(this);
this.onDeleteHandle = this.onDeleteHandle.bind(this);
this.acceptTeam = this.acceptTeam.bind(this);

}
  
componentDidMount(){
  axios.get(`http://localhost:3001/api/getData`).then(resp =>{
      console.log(resp.data);
      this.setState({NFLTeams: resp.data.NFLTeams});
    });
  }

displayNext(event){
  this.setState({
    number: this.state.number +1
  })

}
displayPrev(event){
  this.setState({
    number: this.state.number -1
  })

}

acceptTeam(code){
  axios.post('http://localhost:3001/api/add', {code})
  .then((res)=>{
    this.setState({
      FaveList: res.data
    })
  })
}

onDeleteHandle(code){
  axios.delete(`http://localhost:3001/api/delete/${code}`)
  .then((res)=>{
    this.setState({
      FaveList: res.data
    })
  })

}







render() {
  const teams= this.state.NFLTeams.map((e, i)=>{
    return (
    
    <div key={i}>

    <h3 className="label">Team Name:</h3>
    <h1 className="statisticts">{e.fullName}</h1>    
    <h3 className="label">State:</h3>
    <h1 className="statisticts">{e.shortName}</h1>    
    <h3 className="label">Code:</h3>
    <h1 className="statisticts">{e.code}</h1>

    <button className="accept" onClick={()=>{
      this.acceptTeam(e.code)
    }}>Add</button>
    <button className="reject" onClick={()=>{
      this.onDeleteHandle(e.code)
    }}>Delete</button>
    </div>
    )


  })


  return (
    <div className="App">

<div className="banner">
<h1>2019 Football Teams</h1>
</div>

  <div>       

    <section className="secTwo">
  <DraftList FaveList={this.state.FaveList}>

  </DraftList>

<Prev displayPrev={this.displayPrev}></Prev> 

  <div className="playerCard">
 

    <ProfileImg number={this.state.number} />
    {/* This is how you create a prop to pass down to your "ProfileImg" or other component */}

    <div className="statistics">
    <section className="team">Team Information</section>
      <div>{teams[this.state.number]}</div>
      
      
      
    </div>
  </div>
     
<Next displayNext={this.displayNext}></Next>

    </section>
     </div>

    </div>

  );
}
}
//I am writing this so that I can update GitHub

export default App;
