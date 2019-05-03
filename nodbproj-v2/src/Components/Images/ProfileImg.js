import React, {Component} from 'react';
import './ProfileImg.css'
import axios from 'axios'


class ProfileImg extends Component {
 
    constructor(props) {
        super(props);
    this.state = {
        profile: ""
    }
    }
    componentDidUpdate(){
        axios.get(`https://picsum.photos/200/200/200`).then(resp =>{
         console.log(resp.data);
           this.setState({});
         })
          }
    render(){
        return (
            <div className="ProfileImg">
      {/* <img src=""></img> */}
         <h3 className="playerName">Player Name</h3>
      
            </div>
        )
    }
}

export default ProfileImg