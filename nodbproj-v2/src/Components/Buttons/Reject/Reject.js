import React from 'react';
import './Reject.css'



const Reject = (props) => {
    return (
        <button className="reject" onClick={props.onDeleteHandle}>
      Remove
    </button>
    )
}

export default Reject