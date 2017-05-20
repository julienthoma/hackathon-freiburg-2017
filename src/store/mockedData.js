export default {
  food: {
    rice: {
      name: 'Rice',
      productionEnergy: 5,
      nutritionEnergy: 300,
      water: 2500,
    },
    bread: {
      name: 'Bread',
      productionEnergy: 0.5,
      nutritionEnergy: 300,
      water: 2000,
    },
    milk: {
      name: 'Milk',
      productionEnergy: 1.5,
      nutritionEnergy: 300,
      water: 1000,
    },
    apple: {
      name: 'Apples',
      productionEnergy: 3.2,
      nutritionEnergy: 300,
      water: 822,
    },
    eggs: {
      name: 'Eggs',
      productionEnergy: 8,
      nutritionEnergy: 300,
      water: 200,
    },
    chicken: {
      name: 'Chicken',
      productionEnergy: 9,
      nutritionEnergy: 300,
      water: 4320,
    },
    cheese: {
      name: 'Cheese',
      productionEnergy: 13,
      nutritionEnergy: 300,
      water: 3200,
    },
    pork: {
      name: 'Pork',
      productionEnergy: 25,
      nutritionEnergy: 300,
      water: 5988,
    },
    beef: {
      name: 'Beef',
      productionEnergy: 63,
      nutritionEnergy: 300,
      water: 15400,
    },
  },
  meals: {
    cheeseBurger: {
      name: 'Cheese Burger',
      ingredients: [
        {
          id: 'beef',
          kg: 0.2
        },
        {
          id: 'cheese',
          kg: 0.03
        },
        {
          id: 'bread',
          kg: 0.1
        }
      ]
    },
    eggsAndBread: {
      name: 'Eggs and Bread',
      ingredients: [
        {
          id: 'bread',
          kg: 0.3
        },
        {
          id: 'eggs',
          kg: 0.15
        }
      ]
    },
  },
  restaurants: {
    mcDonalds: {
      name: 'Mc Donalds',
      meals: ['cheeseBurger', 'eggsAndBread']
    },
    burgerKing: {
      name: 'Burger King',
      meals: ['cheeseBurger', 'eggsAndBread']
    }
  }
};