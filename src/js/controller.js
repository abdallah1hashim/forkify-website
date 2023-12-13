import * as module from './module.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

// const recipeMsg = document.querySelector('.recipe .message');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    // 1) Loading recipe
    recipeView.renderSpinner(recipeView.parentEl);
    await module.loadRecipe(id);

    // 2) Rendering recipe
    recipeView.render(module.state.recipe);
  } catch (err) {
    alert(err);
    console.error(err);
  }
};
['hashchange', 'load'].forEach(ev => {
  window.addEventListener(ev, controlRecipes);
});
