import React from 'react';
import { connect } from 'react-redux';
import Meal from '../components/Meal';
import { BarChart } from 'react-easy-chart';

const Meals = ({ meals, food }) => {
  return (
    <div className="page-meal">
      <h1>Meals</h1>
      <BarChart
        axisLabels={{x: 'Food', y: 'kWh / kg'}}
        axes
        height={350}
        width={900}
        grid
        colorBars
        data={Object.keys(meals).map(key => {
          return {
            x: meals[key].name,
            y: meals[key].ingredients.reduce((sum, current) => {
              return sum + food[current.id].productionEnergy * current.kg;
            }, 0)
          }
        })}
      />
      {
        Object.keys(meals).map(key => {
          const { name, ingredients } = meals[key];
          return (
            <Meal
              name={name}
              ingredients={ingredients}
              food={food}
            />
          )
        })
      }
    </div>
  );
};


const mapStateToProps = state => ({
  meals: state.app.meals,
  food: state.app.food
});

const _Meals = connect(mapStateToProps)(Meals);

export default _Meals;
