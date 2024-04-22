import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import { useContext } from "react";
import { RecipesContext } from "./App";

export default function AddRecipe() {
  const {addRecipe} = useContext(RecipesContext)
  
  const [recipe, setRecipe] = useState({
    key: uuidv4(),
    name: "",
    mainIngredient: "",
    calories: "",
    time: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Adding Workout:", recipe);
    addRecipe(recipe);
    setRecipe({
      key: uuidv4(),
      name: "",
      mainIngredient: "",
      calories: "",
      time: "",
    });
  };

  return (
    <div className="max-w-md mx-auto m-5 bg-white p-8 border border-gray-200 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-6">Add New Recipe</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={recipe.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Main Ingredient:
          </label>
          <input
            type="text"
            name="mainIngredient"
            value={recipe.mainIngredient}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Calories:
          </label>
          <input
            type="integer"
            name="calories"
            value={recipe.calories}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Time to cook:
          </label>
          <input
            type="text"
            name="time"
            value={recipe.time}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
}

