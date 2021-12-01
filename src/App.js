import React from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import { useState } from 'react';
import AddForm from './components/AddForm';
import Search from './components/Search';
import DailyBox from './components/DailyBox';

function App() {
  const [showAddFood, setShowAddFood] = useState(true);
  const [foodsArr, setFoodsArr] = useState(foods);
  const [foodSearchArr, setfoodSearchArr] = useState(foods);
  const [daily, setDaily] = useState([]);

  const handleShowForm = () => {
    setShowAddFood(!showAddFood);
  };

  const handleAddFood = (event) => {
    event.preventDefault();

    let newFood = {
      name: event.target.name.value,
      calories: event.target.calories.value,
      image: event.target.image.value,
    };

    setFoodsArr([newFood, ...foodsArr]);
    setShowAddFood(!showAddFood);
  };

  const handleSearch = (event) => {
    const buzz = event.target.value;
    const filteredFoods = foodSearchArr.filter((elem) => {
      return elem.name.includes(buzz);
    });

    setFoodsArr(filteredFoods);
  };

  const handleDaily = (food, quantity) => {
    let i = -1;
    food.quantity = quantity;

    let newDaily = JSON.parse(JSON.stringify(daily));

    daily.forEach((elem, index) => {
      if (elem.name === food.name) {
        i = index;
      }
    });

    if (i >= 0) {
      newDaily[i].quantity = +newDaily[i].quantity + +quantity;
      setDaily([...newDaily]);
    } else {
      setDaily([...newDaily, food]);
    }
  };

  return (
    <div className="App">
      <h1 className="title">IronNutrition</h1>
      <Search fnSeach={handleSearch} />
      {showAddFood ? (
        <button onClick={handleShowForm} className="button is-info">
          Add Food
        </button>
      ) : (
        <AddForm btnAdd={handleAddFood} />
      )}
      <div className="columns">
        <div className="column">
          {foodsArr.map((elem, i) => {
            return <FoodBox key={i} foods={elem} addDaily={handleDaily} />;
          })}
        </div>
        <div className="column">
          <h2 className="subtitle">Today's foods</h2>
          <DailyBox foods={daily} />
        </div>
      </div>
    </div>
  );
}

export default App;
