var recipes = { spaghetti: ['pasta', 'sauce'] }

function updateObjectWithKeyAndValue(recipes, name, ingredients) {
  return Object.assign( {}, recipes, {[name]: ingredients})}

function destructivelyUpdateObjectWithKeyAndValue(recipes, name, ingredients) {
  recipes[name] = ingredients
  return recipes
}

function destructivelyDeleteFromObjectByKey(recipes, name) {
  delete recipes[name]
  return recipes
}