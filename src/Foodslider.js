import React from 'react';
import './home/Foodslider.css';

const FoodSlider = ({ foods }) => {
  return (
    <div className="food-slider">
      {foods.map((food) => (
        <div className="food-card" key={food.id}>
          <img src={food.image} alt={food.name} />
          <h3>{food.name}</h3>
          <p>{food.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FoodSlider;
