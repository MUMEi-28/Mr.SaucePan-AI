import { useState } from "react";

export default function IngredientInput(props)
{
    const [inputValue, setInputValue] = useState("");

    const handleChange = (event) =>
    {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) =>
    {
        props.handleInput(event);
        setInputValue("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="recipe"
                value={inputValue}
                onChange={handleChange}
            />
            <button type="submit" disabled={!inputValue}>+ Add Ingredient</button>
        </form>
    );
}
