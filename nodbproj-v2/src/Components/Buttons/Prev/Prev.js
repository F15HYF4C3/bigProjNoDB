import React from 'react';
import './Prev.css';


const Prev = (props) => {
    
  return (
    <button className="movement" onClick={props.displayPrev}>
    <p>P</p>
    <p>R</p>
    <p>E</p>
    <p>V</p>
    <p>I</p>
    <p>O</p>
    <p>U</p>
    <p>S</p>
  </button>
  );
}
export default Prev