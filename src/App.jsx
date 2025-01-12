import { useState } from "react"


import Header from './components/Header.jsx'
import IngredientInput from './components/IngredientInput.jsx'
import IngredientList from './components/IngredientList.jsx'
import GetRecipe from './components/GetRecipe.jsx'
import Recipe from './components/Recipe.jsx'


import { getRecipeFromMistral } from "./ai"


export default function App()
{
  const [ingredients, setIngredients] = useState(["oregano", "chicken", "Tomatoes", "all main spices"])

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

  const [recipe, setRecipe] = useState("")

  async function ShowRecipe()
  {
    //  console.log("API KEY:  " + import.meta.env.VITE_APP_AI)

    const recipeIdea = await getRecipeFromMistral(ingredients)

    setRecipe(recipeIdea)


    console.log(recipeIdea)
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

      {recipe && <div>
        <Recipe recipe={recipe} />
      </div>}
    </>
  )
}
