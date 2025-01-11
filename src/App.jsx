import { useState } from "react"


import Header from './components/Header.jsx'
import IngredientInput from './components/IngredientInput.jsx'
import IngredientList from './components/IngredientList.jsx'
import GetRecipe from './components/GetRecipe.jsx'
import Recipe from './components/Recipe.jsx'

export default function App()
{
  const [ingredients, setIngredients] = useState(["oregano", "chicken", "Tomatoes", "Tomatoes"])

  function AddIngredients(event)
  {
    event.preventDefault();

    const formElement = new FormData(event.currentTarget);

    setIngredients(prevIngredients => [...prevIngredients, formElement.get("recipe")])
    event.currentTarget.reset()
  }

  function removeIngredient(index)
  {
    setIngredients(prevIngredients => prevIngredients.filter((_, i) => i !== index));
  }

  const [recipeShown, setRecipeShown] = useState(false)

  function ShowRecipe()
  {
    setRecipeShown(function (prevState) { return !prevState })
  }

  return (
    <>
      <Header />
      <main>

        <IngredientInput handleInput={AddIngredients} />
        <IngredientList removeIngredients={removeIngredient} ingredients={ingredients} />

      </main>
      {
        ingredients.length > 3 &&
        <GetRecipe showRecipe={ShowRecipe} />
      }

      {recipeShown && <div>
        <h1>Mr. SaucePan Recommends:</h1>
        <Recipe />
      </div>}
    </>
  )
}
