import IngredientItem from "./IngredientItem.jsx"

export default function IngredientList(props)
{

    return (
        <section className="ingridientList-container">
            <h2>Ingredients on hand</h2>

            {
                props.ingredients.map((elements, index) => (
                    <IngredientItem ingredientsItem={elements} index={index} removeIngredients={props.removeIngredients} />
                ))
            }

        </section>
    )
}