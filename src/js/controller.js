import * as module from './module.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import PaginationView from './views/paginationView.js';

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
    console.error(err);
    recipeView.renderError();
  }
};

const controlSearchResult = async () => {
  try {
    // 1) Get search results
    const query = searchView.getQuery();
    if (!query) return;

    // 2) Load search results
    await module.loadSearchResults(query);

    // 3) Render Resulds
    resultsView.render(module.getSearchResults(1));

    // 4) render pagination
    PaginationView.render(module.state.search);
  } catch (err) {
    console.error(err);
  }
};

const controlPagination = function (goto) {
  // 1) render new reults
  resultsView.render(module.getSearchResults(goto));

  // 2) render new buttons
  PaginationView.render(module.state.search);
};

const controlServings = function (newServings) {
  // update the recipe servings
  module.updateServings(newServings);
  // update the view
  recipeView.render(module.state.recipe);
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerClick(controlServings);
  searchView.addHandlerSearch(controlSearchResult);
  PaginationView.addHandlerClick(controlPagination);
};
init();
