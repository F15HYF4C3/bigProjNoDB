import React, {Component} from 'react';
import './ProfileImg.css'
// import axios from 'axios'


class ProfileImg extends Component {
 
    render(){
        return (
            <div className="ProfileImg">
      {/* <img src= {axios.get("https://picsum.photos/200/200/200")}></img> */}
         <h3 className="playerName">Player Name</h3>
      
            </div>
        )
    }
}

export default ProfileImg