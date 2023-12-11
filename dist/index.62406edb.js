const recipeContainer = document.querySelector(".recipe");
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
// https://forkify-api.herokuapp.com/v2
///////////////////////////////////////
const url = `https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886`;
const showRecipe = async function() {
    try {
        const res = await fetch(url);
        const recipeData = await res.json();
        console.log(res, recipeData);
    } catch (err) {
        alert(err);
    }
};
showRecipe();

//# sourceMappingURL=index.62406edb.js.map
