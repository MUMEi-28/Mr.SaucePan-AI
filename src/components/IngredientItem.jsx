export default function IngredientItem(props)
{
    return (
        <section>
            <div className="ingridientItem">
                {props.ingredientsItem}
                <button onClick={() => props.removeIngredients(props.index)} >Remove</button>
            </div>
        </section>
    )
}

/* props.handleClick(props.index) */