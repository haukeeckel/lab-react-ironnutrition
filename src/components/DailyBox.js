import React from 'react';

function DailyBox({ foods }) {
  let total = foods.reduce((sum, acc) => {
    return sum + acc.calories * acc.quantity;
  }, 0);

  return (
    <div>
      <ul>
        {foods.map((elem, i) => {
          return (
            <li key={i}>
              {elem.quantity} - {elem.name} - {+elem.quantity * +elem.calories}
            </li>
          );
        })}
      </ul>
      <h3 className="subtitle">Total: {total}</h3>
    </div>
  );
}

export default DailyBox;
