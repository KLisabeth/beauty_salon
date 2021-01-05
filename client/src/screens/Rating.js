import React, { useState } from "react";




const Star = ({ marked, starId }) => {
    return (
      <span star-id={starId} style={{ color: '#ff9933' }} >
        {marked ? '\u2605' : '\u2606'}
      </span>
    );
  };
  
  const Rating = ({ value }) => {
    const [rating, setRating] = useState(typeof value == 'number' ? value : 0);
    const [selection, setSelection] = useState(0);
    const hoverOver = event => {
      let val = 0;
      if (event && event.target && event.target.getAttribute('star-id'))
        val = event.target.getAttribute('star-id');
      setSelection(val);
    };
    return (
      <div
        onMouseOut={() => hoverOver(null)}
        onClick={event => setRating(event.target.getAttribute('star-id') || rating)}
        onMouseOver={hoverOver}
      >
        {Array.from({ length: 5 }, (v, i) => (
          <Star
            starId={i + 1}
            key={`star_${i + 1} `}
            marked={selection ? selection >= i + 1 : rating >= i + 1}
          />
        ))}
      </div>
    );
  };
  export default Rating;