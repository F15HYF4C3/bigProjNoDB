import React from 'react';
import './ProfileImg.css'



const ProfileImg = (props) => {
    
    return (
        <div className="ProfileImg" style={{backgroundImage: `url(https://api.adorable.io/avatars/275/${props.number})`}}>

        </div>
    )
}


export default ProfileImg