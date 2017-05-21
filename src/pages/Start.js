import React from 'react';
import { connect } from 'react-redux';

const Start = ({ food, meals, restaurants }) => {
  return (

    <div className="home-content-wrapper">
      <h1>By saving <span>energy</span> for your food consumption, make the world a better place</h1>
      <div className="restaurant-panels-container">

        <div className="restaurant-panel">
          <div className="restaurant-panel-img retaurant-img01"></div>
          <div className="restaurant-panel-info">Today <b>10%</b> disscount</div>
        </div>

        <div className="restaurant-panel">
          <div className="restaurant-panel-img retaurant-img02"></div>
          <div className="restaurant-panel-info">Today <b>Tomato Soup</b></div>
        </div>

        <div className="restaurant-panel">
          <div className="restaurant-panel-img retaurant-img03"></div>
          <div className="restaurant-panel-info">Today <b>closed</b></div>
        </div>

        <div className="restaurant-panel">
          <div className="restaurant-panel-img retaurant-img04"></div>
          <div className="restaurant-panel-info">Today <b>free dessert</b></div>
        </div>

        <div className="restaurant-panel">
          <div className="restaurant-panel-img retaurant-img05"></div>
          <div className="restaurant-panel-info">Today <b>open</b></div>
        </div>
      </div>
</div>
  );
};

Start.propTypes = {};

const mapStateToProps = state => ({
  food: state.app.food,
  meals: state.app.meals,
  restaurants: state.app.restaurants
});

const _Start = connect(mapStateToProps)(Start);

export default _Start;
