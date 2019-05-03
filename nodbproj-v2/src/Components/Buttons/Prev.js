import React, {Component} from 'react';
import './buttons.css';
import axios from 'axios';

class Prev extends Component {
 
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

    componentDidUpdate(){
    axios.get(`http://localhost:3001/api/getData`).then(resp =>{
     console.log(resp.data);
       this.setState({});
     })
      }
    // prevTeams(Teams){
    //     let teamList = this.state.Teams.slice();
    //     for(i=0; i<teamList.length; i--){

    //     }

    
    render() {
        return (

      <button className="prev">Previous</button>
      
        );
      }
      }

export default Prev