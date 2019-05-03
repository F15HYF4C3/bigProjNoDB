import React, {Component} from 'react';
import './buttons.css';
import axios from 'axios';



class Next extends Component {
 
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
    // nextTeams(Teams){
    //     let teamList = this.state.Teams.slice();
    //     for(i=0; i<teamList.length; i++){

    //     }

    
    render() {
        return (

      <button className="next">Next</button>
      
        );
      }
      }

export default Next