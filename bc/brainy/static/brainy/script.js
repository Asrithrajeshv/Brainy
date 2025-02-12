const searchBtn = document.getElementById("search-btn");
const mealList = document.getElementById("meal");
const mealDetailsContent = document.querySelector(".meal-details-content");
const recipeCloseBtn = document.getElementById("recipe-close-btn");

// Event listeners
searchBtn.addEventListener("click", getMealList);
mealList.addEventListener("click", getMealRecipe);
recipeCloseBtn.addEventListener("click", () => {
    mealDetailsContent.parentElement.classList.remove("showRecipe");
});

// Get meal list that matches with the ingredient
function getMealList() {
    let searchInputTxt = document.getElementById("search-input").value.trim();

    // Check if input is empty
    if (searchInputTxt === "") {
        mealList.innerHTML = `<p>Please enter an ingredient to search for meals.</p>`;
        return;
    }

    // Check if input is a number
    if (!isNaN(searchInputTxt)) {
        console.log("It is a number");
        mealList.innerHTML = `<h3><p>😂 It is a number! Are you trying to order by meal codes?</p></h3>`;
        return;
    }
   

    // Fetch meal data
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
        .then(response => response.json())
        .then(data => {
            let html = "";
            if (data.meals) {
                data.meals.forEach(meal => {
                    html += `
                        <div class="meal-item" data-id="${meal.idMeal}">
                            <div class="meal-img">
                                <img src="${meal.strMealThumb}" alt="food">
                            </div>
                            <div class="meal-name">
                                <h3>${meal.strMeal}</h3>
                                <a href="#" class="recipe-btn">Get Recipe</a>
                            </div>
                        </div>
                    `;
                });
                mealList.classList.remove("notFound");
            } else {
                html = `<p>😔 Sorry, we didn't find any meal with that ingredient.</p>`;
                mealList.classList.add("notFound");
            }
            mealList.innerHTML = html;
        })
        .catch(error => {
            mealList.innerHTML = `<p>⚠️ Oops! Something went wrong. Please try again later.</p>`;
            console.error("Error fetching meal data:", error);
        });
}

// Get recipe of the meal
function getMealRecipe(e) {
    e.preventDefault();
    if (e.target.classList.contains("recipe-btn")) {
        let mealItem = e.target.parentElement.parentElement;
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
            .then(response => response.json())
            .then(data => mealRecipeModal(data.meals))
            .catch(error => console.error("Error fetching meal recipe:", error));
    }
}

// Create a modal for the meal recipe
function mealRecipeModal(meal) {
    console.log(meal);
    meal = meal[0];
    let html = `
        <h2 class="recipe-title">${meal.strMeal}</h2>
        <p class="recipe-category">${meal.strCategory}</p>
        <div class="recipe-instruct">
            <h3>Instructions:</h3>
            <p>${meal.strInstructions}</p>
        </div>
        <div class="recipe-meal-img">
            <img src="${meal.strMealThumb}" alt="">
        </div>
        <div class="recipe-link">
            <a href="${meal.strYoutube}" target="_blank">Watch Video</a>
        </div>
    `;
    mealDetailsContent.innerHTML = html;
    mealDetailsContent.parentElement.classList.add("showRecipe");
}
