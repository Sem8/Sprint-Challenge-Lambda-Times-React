import React from 'react';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.eachCardDisplay.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.eachCardDisplay.img } />
        </div>
        <span>By {props.eachCardDisplay.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

export default Card;
