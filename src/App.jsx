import { Outlet, Link } from "react-router-dom";
import { createContext, useState } from "react";
import {v4 as uuidv4} from "uuid"

const RecipesContext = createContext({
  recipes: [],
  addRecipe: () => {},
  deleteRecipe: () => {},
});

function App() {
  const recipeListInitial = [
    {
      key: uuidv4(),
      name: "Aglio Olio Pasta",
      mainIngredient: "Cream",
      calories: "100",
      time: "30 minutes",
    },
    {
      key: uuidv4(),
      name: "Bruschetta",
      mainIngredient: "Tomato",
      calories: "200",
      time: "40 minutes",
    },
    {
      key: uuidv4(),
      name: "Chicken Burger",
      mainIngredient: "Chicken",
      calories: "500",
      time: "10 minutes",
    },
    {
      key: uuidv4(),
      name: "Cup Noodles",
      mainIngredient: "Noodles",
      calories: "68",
      time: "2 minutes",
    },
  ];
  const [recipes, setRecipes] = useState(recipeListInitial);

  const addRecipe = (recipe) => {
    setRecipes((prevRecipes) => [...prevRecipes, recipe]);
  };

  const deleteRecipe = (index) => {
    const newRecipes = recipes.filter((item) => item.key !== index);
    setRecipes(newRecipes);
  };
  return (
    <>
      <nav className="bg-gray-800 font-sans text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            MyRecipes
          </Link>
          <ul className="flex">
            <li>
              <Link
                to="/add-recipe"
                className="px-4 py-2 hover:bg-gray-700 rounded transition-colors"
              >
                Add Recipe
              </Link>
            </li>
            <li>
              <Link
                to="/all-recipes"
                className="px-4 py-2 hover:bg-gray-700 rounded transition-colors"
              >
                All Recipes
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <RecipesContext.Provider value={{ recipes, addRecipe, deleteRecipe }}>
        <Outlet />
      </RecipesContext.Provider>
    </>
  );
}

export {App, RecipesContext};
