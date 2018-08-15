var recipes = { spaghetti: ['pasta', 'sauce'] }

function updateObjectWithKeyAndValue(recipes, name, ingredients) {
  return Object.assign( {}, recipes, {[name]: ingredients})}
