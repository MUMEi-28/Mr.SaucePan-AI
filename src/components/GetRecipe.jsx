export default function GetRecipe(props)
{
    return (
        <section className="get-recipe">
            <h1>Ready for A Recipe?</h1>
            <button onClick={props.showRecipe}>Generate</button>
        </section>
    )
}