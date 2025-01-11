
import Header from './components/Header.jsx'
import IngredientInput from './components/IngredientInput.jsx'
import IngredientList from './components/IngredientList.jsx'
import GetRecipe from './components/GetRecipe.jsx'
import Recipe from './components/Recipe.jsx'

export default function App()
{
  return (
    <>
      <Header />
      <main>
        <IngredientInput />
        <IngredientList />

      </main>
      <GetRecipe />
      <Recipe />

    </>
  )
}
