import React from 'react';
import { useState } from 'react';

function FoodBox({ foods, addDaily }) {
  const [quantity, setQuantity] = useState(0);

  const handleQty = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <div>
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={foods.image} alt="" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{foods.name}</strong> <br />
                <small>{foods.calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  onChange={handleQty}
                  className="input"
                  type="number"
                  value={quantity}
                  min="0"
                />
              </div>
              <div className="control">
                <button
                  onClick={() => {
                    addDaily(foods, quantity);
                  }}
                  className="button is-info"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default FoodBox;
