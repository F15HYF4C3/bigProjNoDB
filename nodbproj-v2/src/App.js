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
    profile: ""
}

this.displayNext = this.displayNext.bind(this);
this.displayPrev = this.displayPrev.bind(this);
this.faveList = this.faveList.bind(this);
// this.acceptTeam = this.acceptTeam.bind(this);
// this.removeTeam = this.rejectTeam.bind(this);
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



faveList = (item) =>{
  let list =[];
//   // for(let i=0; i<=list.length; i++){
//   //   if(i)
  
//   acceptTeam(event){
  this.setState({
    list: list.push(this.state.NFLTeams)
  })
// }
//   rejectTeam(event){
//   this.setState({
//     list: list.slice(list.indexOf(), this.state.NFLTeams)
// })
// }
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
<DraftList/>
<Accept/>
<Prev displayPrev={this.displayPrev}></Prev> 

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
     
<Next displayNext={this.displayNext}>Boobs</Next>
<Reject/>
</section>
     </div>

    </div>

  );
}
}
//I am writing this so that I can update GitHub

export default App;
