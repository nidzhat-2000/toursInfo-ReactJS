import React, { useState } from 'react';

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  const toggle = () => {
    setReadMore(boolean => !boolean);
  };

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">Eur {price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}`}
          <button onClick={toggle}>
            {readMore ? 'Show Less' : 'Read More'}
          </button>
        </p>
      </footer>
      <button className="delete-btn" onClick={() => removeTour(id)}>
        not interested
      </button>
    </article>
  );
};

export default Tour;
