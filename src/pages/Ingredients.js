import React from 'react';
import { connect } from 'react-redux';
import Ingredient from '../components/Ingredient';
import { BarChart } from 'react-easy-chart';

const Ingredients = ({ food }) => {
  return (
    <div className="page-ingredients">
      <h4>Energy needed to produce 1 kg</h4>
      <BarChart
        axisLabels={{x: 'Food', y: 'kWh / kg'}}
        axes
        height={350}
        width={900}
        grid
        colorBars
        data={Object.keys(food).map(key => {
          return {
            x: food[key].name,
            y: food[key].productionEnergy
          }
        })}
      />

      <h4>Amount of water needed to produce 1 kg</h4>
      <BarChart
        axisLabels={{x: 'Food', y: 'liters / kg'}}
        axes
        height={350}
        width={900}
        grid
        colorBars
        data={Object.keys(food).map(key => {
          return {
            x: food[key].name,
            y: food[key].water
          }
        })}
      />
      {
        Object.keys(food).map(key => {
          const { name, productionEnergy, nutritionEnergy, water } = food[key];
          return (
            <Ingredient
              name={name}
              productionEnergy={productionEnergy}
              nutritionEnergy={nutritionEnergy}
              water={water}
              kg={1}
            />
          )
        })
      }
    </div>
  );
};


const mapStateToProps = state => ({
  food: state.app.food
});

const _Ingredients = connect(mapStateToProps)(Ingredients);

export default _Ingredients;
