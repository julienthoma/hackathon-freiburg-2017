export default {
  food: {
    rice: {
      name: 'Rice',
      productionEnergy: 7,
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
      productionEnergy: 4.44,
      nutritionEnergy: 300,
      water: 1000,
    },
    apple: {
      name: 'Apples',
      productionEnergy: 6.66,
      nutritionEnergy: 300,
      water: 822,
    },
    eggs: {
      name: 'Eggs',
      productionEnergy: 8.88,
      nutritionEnergy: 300,
      water: 200,
    },
    chicken: {
      name: 'Chicken',
      productionEnergy: 9.5,
      nutritionEnergy: 300,
      water: 4320,
    },
    cheese: {
      name: 'Cheese',
      productionEnergy: 15.5,
      nutritionEnergy: 300,
      water: 3200,
    },
    pork: {
      name: 'Pork',
      productionEnergy: 26,
      nutritionEnergy: 300,
      water: 5988,
    },
    beef: {
      name: 'Beef',
      productionEnergy: 63,
      nutritionEnergy: 300,
      water: 15400,
    },
    tomatosauce: {
      name: 'Tomato Sauce',
      productionEnergy: 7,
      nutritionEnergy: 29,
      water: 2000,
    },
    spaghetti: {
      name: 'Spaghetti',
      productionEnergy: 7,
      nutritionEnergy: 158,
      water: 3000,
    },
    fish: {
      name: 'Fish',
      productionEnergy: 7,
      nutritionEnergy: 206,
      water: 1000,
    },
    fries: {
      name: 'Fries',
      productionEnergy: 9.5,
      nutritionEnergy: 312,
      water: 2000,
    },
    vegetablesoup: {
      name: 'Vegetable Soup',
      productionEnergy: 1,
      nutritionEnergy: 65,
      water: 4500,
    },
  },
  meals: {
    cheeseBurger: {
      name: 'Cheese Burger',
      imgUrl: 'http://www.myw-cms.it/amm/immagini/0002/prodotti/6666_imgscheda_seitan-baconcheese-burger-png.PNG',
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
    fishBurger: {
      name: 'Fish Burger',
      imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAqMLIYz0P4EiZnY3oSurcT2Istre7bR2yjW2sKgPk28-EVzwg5g',
      ingredients: [
        {
          id: 'fish',
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
    riceandvegesoup: {
      name: 'Rice and Vegetable Soup',
      imgUrl:'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/chunky-vegetable-brown-rice-soup.jpg?itok=-LzjNUDD',
      ingredients: [
        {
          id: 'rice',
          kg: 0.25
        },
        {
          id: 'vegetablesoup',
          kg: 0.2
        }
      ]
    },
    pizzamargerita: {
      name: 'Pizza Margherita',
        imgUrl:'http://www.roadtvitalia.it/wp-content/uploads/2015/03/Pizza-Patrimonio-dellUmanit%C3%A0.jpg',
      ingredients: [
        {
          id: 'bread',
          kg: 0.3
        },
        {
          id: 'cheese',
          kg: 0.2
        },
        {
          id: 'tomatosauce',
          kg: 0.05
        }
      ]
    },
    pizzasalami: {
      name: 'Pizza Salami',
      imgUrl:'http://www.zustellung-graz.at/wp-content/uploads/2016/05/salami1.jpg',
      ingredients: [
        {
          id: 'bread',
          kg: 0.3
        },
        {
          id: 'cheese',
          kg: 0.2
        },
        {
          id: 'pork',
          kg: 0.1
        },
        {
          id: 'tomatosauce',
          kg: 0.05
        }
      ]
    },
    fries: {
      name: 'Fries',
      imgUrl:'http://cdn.potatopro.com/cdn/farfuture/hU5XuQNKIBXiWjVsMhK1PJKO_MyXmc_YVv8OcPHYJyg/mtime:1470929551/sites/default/files/pictures/french-fries-1200.jpg',
      ingredients: [
        {
          id: 'fries',
          kg: 0.4
        }
      ]
    },
    burgerandfries: {
      name: 'Burger And Fries',
      imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSdkTE5MMpNkDTU80ffPOJeLW5TX7V6DhrOSEDnGV29MDdLDz7',
      ingredients: [
        {
          id: 'fries',
          kg: 0.4
        },
        {
          id: 'beef',
          kg: 0.33
        },
        {
          id: 'bread',
          kg: 0.2
        }
      ]
    },
    eggsAndBread: {
      name: 'Eggs and Bread',
      imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_-4MpEQnMrAc1JjLhJrU4EWKCJGlCDksSdeNXNQ5QahlWHo8',
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
      meals: ['cheeseBurger', 'fishBurger', 'fries']
    },
    burgerKing: {
      name: 'Burger King',
      meals: ['cheeseBurger', 'fishBurger', 'pizzasalami', 'pizzamargerita']
    },
    mensa: {
      name: 'Mensa',
      meals: ['vegetablesoup', 'riceandvegesoup', 'burgerandfries']
    }
  }
};
