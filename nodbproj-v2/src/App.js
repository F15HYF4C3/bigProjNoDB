import React, {Component} from 'react';
import './App.css';
import Next from './Components/Buttons/Next';
import Prev from './Components/Buttons/Prev';
import ProfileImg from './Components/Images/ProfileImg';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
this.state = {
  NFLTeams:[],
    code:"",
    fullName:"",
    shortName:"",
    number: 0,
    profile: ""
}

this.displayNext = this.displayNext.bind(this);
this.displayPrev = this.displayPrev.bind(this);
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



render() {
  const teams= this.state.NFLTeams.map((e, i)=>{
    return <div key={i}>{e.fullName}</div>

  })
  const nickName= this.state.NFLTeams.map((e, i)=>{
    return <div key={i}>{e.shortName}</div>

  })
  const acronym= this.state.NFLTeams.map((e, i)=>{
    return <div key={i}>{e.code}</div>

  })
  

  return (
    
    <div className="App">
<div className="banner"><h1>2019 Football Teams</h1></div>


     <div>

       

<section className="secTwo">
<Prev displayPrev={this.displayPrev}>PREVIOUS</Prev> 

  <div className="playerCard">
 

    <ProfileImg number={this.state.number} />
    {/* This is how you create a prop to pass down to your "ProfileImg" or other component */}

    <div className="statistics">
    <section className="label">Team Name:</section>
      <div>{teams[this.state.number]}</div>
      
      <section className="label">Represents:</section>
        <div>{nickName[this.state.number]}</div>
      
      <section className="label">Short Code:</section>
        <div>{acronym[this.state.number]}</div>
      
       
    </div>
  </div>
     
<Next displayNext={this.displayNext}>NEXT</Next>
</section>
     </div>

    </div>

  );
}
}

export default App;
