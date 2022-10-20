import React, { useState } from "react";

const Tour = ({ id, image, info, price, name }) => {
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">Eur {price}</h4>
        </div>
        <p>{info}</p>
      </footer>
      <button className="delete-btn">not interested</button>
    </article>
  );
};

export default Tour;
