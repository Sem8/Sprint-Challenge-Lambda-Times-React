import React from 'react';
import PropTypes from 'prop-types';

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

Card.propTypes = {
  eachCardDisplay: PropTypes.object.isRequired,
  eachCardDisplay: PropTypes.shape({
    headline: PropTypes.string.isRequired,
    tab: PropTypes.string,
    img: PropTypes.string.isRequired,
    author: PropTypes.string,
  })  
}