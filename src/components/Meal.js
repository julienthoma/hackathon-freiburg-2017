import React from 'react';
import Ingredient from '../components/Ingredient';
import MyBarChart from '../components/MyBarChart';

export default ({ name, ingredients, food }) => {
  const {productionEnergySum, nutritionEnergySum, waterSum} = ingredients.reduce(({productionEnergySum, nutritionEnergySum, waterSum}, { id, kg}) => {
    const { productionEnergy, nutritionEnergy, water } = food[id];

    return {
      productionEnergySum: productionEnergySum + productionEnergy * kg,
      nutritionEnergySum: nutritionEnergySum + nutritionEnergy * kg,
      waterSum: waterSum + water * kg,
    }
  }, {productionEnergySum: 0, nutritionEnergySum: 0, waterSum: 0});

  return (
    <div className="meal-item">
      <h2>{name}</h2>
      <div className="chart-container">
        <MyBarChart
          xLabel="Meals"
          yLabel="Energy Consumption kWh"
          height={300}
          width={300}
          data={
            ingredients.map(({ id, kg }) => {
              const { name, productionEnergy } = food[id];
              return {
                x: name,
                y: productionEnergy * kg
              };
            })}
        />

        <MyBarChart
          xLabel="Meals"
          yLabel="Water Consumption"
          height={300}
          width={300}
          data={
            ingredients.map(({ id, kg }) => {
              const { name, water } = food[id];
              return {
                x: name,
                y: water * kg
              };
            })}
        />

        <MyBarChart
          xLabel="Meals"
          yLabel="Calories"
          height={300}
          width={300}
          data={
            ingredients.map(({ id, kg }) => {
              const { name, nutritionEnergy } = food[id];
              return {
                x: name,
                y: nutritionEnergy * kg
              };
            })}
        />
      </div>

      <div className="main-inner">
          <div className="food-list">
            <div className="food-list-item">
              <div className="food-list-img"></div>
              <div className="food-list-info">
                <p>Energy Consumption: {productionEnergySum.toFixed(2)} kWh</p>
                <p>Calories: {nutritionEnergySum.toFixed(2)} cal</p>
                <p>Water: {waterSum.toFixed(2)} liters</p>
              </div>
            </div>
          </div>
      </div>

    </div>
  )
}
