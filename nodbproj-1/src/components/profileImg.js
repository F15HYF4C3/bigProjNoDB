import { Players } from "./NFL Players/Players.js";
import React from 'react';
import axios from 'axios';


const ProfileImg = () =>{
    return (
        <imgsrc url="https://api.adorable.io/avatars/285/abott@adorable.png"/>
    )
}


  axios.get(`https://api.adorable.io/avatars/285/${Players.playerID}.png`).then(resp =>{
    console.log(resp.data)
  })

export default ProfileImg