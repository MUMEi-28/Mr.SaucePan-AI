import ReactMarkdown from "react-markdown"


export default function Recipe(props)
{
    return (

        <div className="suggested-recipe-container">
            <h1>Mr. SaucePan Recommends: </h1>

            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </div>
    )
}