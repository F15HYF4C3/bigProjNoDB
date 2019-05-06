import React from 'react';
import './Prev.css';


const Prev = (props) => {
    
  return (
    <button className="movement" onClick={props.displayPrev}>
    PREVIOUS
  </button>
  );
}
export default Prev