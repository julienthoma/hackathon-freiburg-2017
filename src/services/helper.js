export const calcIngredientScore = (productionEnergy, nutritionEnergy, water, kg) => {
  return parseFloat((100000000 / (productionEnergy * nutritionEnergy * water * kg)).toFixed(2));
};

