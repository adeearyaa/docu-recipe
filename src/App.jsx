import { Outlet, Link } from "react-router-dom";

function App() {
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
      <Outlet />
    </>
  );
}

export default App;
