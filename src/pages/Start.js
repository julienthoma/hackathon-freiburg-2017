import React from 'react';
import { connect } from 'react-redux';

const Start = ({ food, meals, restaurants }) => {
  return (
    <div>
      <div className="main-inner">
          <div className="food-list">
            <div className="food-list-item">
              <div className="food-list-img"></div>
              <div className="food-list-info">
                <p>Product: Burger</p>
                <p>Energy consumption: 300 kcal</p>
              </div>
            </div>
          </div>
      </div>


      <div>
        {
          Object.keys(restaurants).map(key => {
            const { name } = restaurants[key];
            return (
              <div className="restaurant-item">
                {name}
              </div>
            )
          })
        }
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
