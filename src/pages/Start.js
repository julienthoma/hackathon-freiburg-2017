import React from 'react';
import { connect } from 'react-redux';
import { BarChart } from 'react-easy-chart';

const Start = ({ food, meals }) => {
  return (
    <div>
      <h4>Energy needed to produce 1 kg</h4>
      <BarChart
        axisLabels={{x: 'Food', y: 'kWh / kg'}}
        axes
        height={350}
        width={600}
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
        width={600}
        grid
        colorBars
        data={Object.keys(food).map(key => {
          return {
            x: food[key].name,
            y: food[key].water
          }
        })}
      />

      <h4>Meals</h4>
      <BarChart
        axisLabels={{x: 'Food', y: 'kWh / kg'}}
        axes
        height={350}
        width={600}
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
    </div>
  );
};

Start.propTypes = {};

const mapStateToProps = state => ({
  food: state.app.food,
  meals: state.app.meals,
});

const _Start = connect(mapStateToProps)(Start);

export default _Start;
