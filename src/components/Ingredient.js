import React from 'react';
import { calcIngredientScore } from '../services/helper';

const Ingredient = ({ name, productionEnergy, nutritionEnergy, water, kg }) => (
  <div className="ingredient-item">
      <h4>{name}</h4>
      <div>Prod Energy: {productionEnergy}</div>
      <div>Nutr Energy: {nutritionEnergy}</div>
      <div>Water: {water}</div>
      <div>Amount: {kg} kg</div>
      <div>Score: {calcIngredientScore(productionEnergy, nutritionEnergy, water, kg)}</div>
  </div>
);

export default Ingredient;
