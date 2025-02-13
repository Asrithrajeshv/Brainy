const API_KEY = "8fec620392384f819c73a5e188f16c36"; // Replace with your API key

async function fetchFullRecipe() {
    const urlParams = new URLSearchParams(window.location.search);
    const mealID = urlParams.get("mealID");

    if (!mealID) {
        document.getElementById("recipe-container").innerHTML = "<p>⚠️ No recipe found!</p>";
        return;
    }

    try {
        let response = await fetch(`https://api.spoonacular.com/recipes/${mealID}/information?includeNutrition=true&apiKey=${API_KEY}`);
        let meal = await response.json();

        document.getElementById("recipe-title").innerText = meal.title;
        document.getElementById("recipe-image").src = meal.image;
        document.getElementById("recipe-category").innerText = meal.dishTypes ? meal.dishTypes.join(", ") : "N/A";

        // Display instructions
        document.getElementById("recipe-instructions").innerHTML = `
            <h3>Instructions</h3>
            <p>${meal.instructions || "No instructions available."}</p>
        `;

        // Display nutrition
        if (meal.nutrition) {
            document.getElementById("nutrition-info").innerHTML = `
                <h3>Nutrition Facts</h3>
                <p>Calories: ${meal.nutrition.nutrients[0].amount} kcal</p>
                <p>Protein: ${meal.nutrition.nutrients[8].amount}g</p>
                <p>Carbs: ${meal.nutrition.nutrients[3].amount}g</p>
                <p>Fat: ${meal.nutrition.nutrients[1].amount}g</p>
            `;
        }

        // Display video if available
        if (meal.spoonacularSourceUrl) {
            document.getElementById("recipe-video").innerHTML = `
                <h3>Watch Step-by-Step</h3>
                <a href="${meal.spoonacularSourceUrl}" target="_blank">🎥 Watch Video</a>
            `;
        }
    } catch (error) {
        document.getElementById("recipe-container").innerHTML = "<p>⚠️ Error loading recipe details.</p>";
        console.error("API Error:", error);
    }
}

window.onload = fetchFullRecipe;
