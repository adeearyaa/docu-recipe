import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import AddRecipe from './addRecipe.jsx'
import AllRecipes from './allRecipes.jsx'
import HomePage from './homePage.jsx'
import './index.css'


const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children: [
      { index: true, element : <HomePage/>},
      { path: "add-recipe", element: <AddRecipe/> },
      { path: "all-recipes", element: <AllRecipes/> }
    ]
  },
  
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
