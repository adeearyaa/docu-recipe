import { useContext } from "react";
import { RecipesContext } from "./App";

export default function AllRecipes() {
  const {recipes, deleteRecipe} = useContext(RecipesContext)
  
  const recipeDisplayList = recipes.map((recipe) => (
    <div
      key={recipe.key}
      className="relative border border-gray-300 m-2 p-4 rounded-lg bg-gray-100 shadow-lg"
    >
      <button
        onClick={() => deleteRecipe(recipe.key)}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <h2 className="text-xl font-bold">{recipe.name}</h2>
      <p className="text-gray-600">Ingredient: {recipe.mainIngredient}</p>
      <p className="text-gray-600">Calories: {recipe.calories}</p>
      <p className="text-gray-600">Duration: {recipe.time}</p>
    </div>
  ));

  return (
    <div className="flex-1 flex-col justify-center m-1 bg-gray-900 items-center rounded-lg">
      {recipeDisplayList}
    </div>
  );
}
