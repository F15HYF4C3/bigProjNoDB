import React from 'react';
import './Next.css';




const Next = (props) => {
    
        return (

          <button className="movement" onClick={props.displayNext}>
          <p>N</p>
          <p>E</p>
          <p>X</p>
          <p>T</p>
        </button>
      
        );
      }
      

export default Next