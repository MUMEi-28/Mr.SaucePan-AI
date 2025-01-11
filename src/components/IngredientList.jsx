import IngredientItem from "./IngredientItem.jsx"

export default function IngredientList()
{
    return (
        <section className="ingridientList-container">
            <h2>Ingredients on hand</h2>
            <IngredientItem />
            <IngredientItem />
            <IngredientItem />
            <IngredientItem />
        </section>
    )
}