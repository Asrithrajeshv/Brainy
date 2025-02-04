document.getElementById('search-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const query = e.target.query.value;
    if (!query) {
        alert("Please enter a search query!");
        return;
    }
    try {
        const response = await fetch(`/brainy/search/?query=${query}`);
        const data = await response.json();
        displayRecipes(data);
    } catch (error) {
        console.error("Error fetching search results:", error);
    }
});

document.getElementById('random-recipe').addEventListener('click', async () => {
    try {
        const response = await fetch(`/brainy/random/`);
        const data = await response.json();
        displayRecipes(data);
    } catch (error) {
        console.error("Error fetching random recipe:", error);
    }
});

function displayRecipes(recipes) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = "";

    if (!recipes || recipes.length === 0) {
        resultsDiv.innerHTML = "<p>No recipes found!</p>";
        return;
    }

    recipes.forEach(recipe => {
        resultsDiv.innerHTML += `
            <div class="recipe">
                <h2>${recipe.strMeal}</h2>
                <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}" />
                <p>${recipe.strInstructions}</p>
            </div>
        `;
    });
}
