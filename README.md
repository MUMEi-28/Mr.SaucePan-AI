
# Mr. SaucePan

## Overview

**Mr. SaucePan** is a React-based web application that uses AI to generate recipes based on the ingredients provided by the user. Powered by the HuggingFace API, this application demonstrates the integration of React concepts such as forms, state management, conditional rendering, and event handling. The output recipe is formatted beautifully using the `react-markdown` library.

---

## Features

1. **Ingredient Input Form**:

   - Add ingredients dynamically via an input field and button.
   - Display the list of added ingredients.

2. **Recipe Generation**:

   - Generate a recipe suggestion by sending user-provided ingredients to the HuggingFace API.
   - Show loading and error states during API interaction.

3. **Formatted Recipe Output**:

   - Use `react-markdown` to render the generated recipe in a structured and readable format.

4. **Modern State Management**:

   - Utilize React's `useState` for managing input, ingredients, and recipe state.

---

## Technologies Used

- **React**: Frontend library for building the user interface.
- **Vite**: Fast and modern toolchain for setting up and building React apps.
- **HuggingFace API**: AI-based API to generate recipes dynamically.
- **React Markdown**: Library for rendering formatted Markdown.
- **CSS**: Basic styling for the application.

---

## Installation

Follow the steps below to set up the project locally:

1. Clone the repository:

   ```bash
   git clone <repository_url>
   ```

2. Navigate to the project directory:

   ```bash
   cd mr-saucepan
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and go to:

   ```
   http://localhost:5173
   ```

---

## File Structure

```
mr-saucepan/
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable components
│   │   ├── GetRecipe.jsx     # Recipe button section
│   │   └── Header.jsx        # Header component
│   │   ├── IngredientInput.jsx     # Main Ingredient input component
│   │   └── IngredientItem.jsx      # Display the inputed ingredient
│   │   ├── IngredientList.jsx     # Display the list of ingredient
│   │   └── Recipe.jsx           # Show the generated recipe
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css        # Global styles
├── package.json          # Project metadata and dependencies
├── vite.config.js        # Vite configuration
└── README.md             # Project documentation
```

---

## How It Works

1. The user enters an ingredient in the input field and clicks the "Add" button to update the ingredient list.
2. Once the ingredients are ready, the user clicks the "Generate Recipe" button to fetch a recipe from the HuggingFace API.
3. The app does not display any loading spinner or visual cues while waiting for the API response. So Wait.
4. The generated recipe is formatted and displayed using `react-markdown`.
5. Reload page to generate new recipe.

---

## Example Data Flow

1. **Input**: User enters ingredients (`"egg", "flour", "milk"`).
2. **API Call**: Ingredients are sent to the HuggingFace API.
3. **Output**: API returns a Markdown-formatted recipe:
   ```markdown
   ### Pancake Recipe
   - Mix egg, flour, and milk in a bowl.
   - Heat a pan and pour the batter.
   - Cook until golden brown.
   ```

---

## Acknowledgements

- **HuggingFace**: For providing the AI-based recipe generation API.
- **React Markdown**: For rendering formatted recipes beautifully.
- **Vite**: For a fast and modern React development experience.
- **FLATICON**: For that hat icon.

---

Enjoy crafting your recipes with **Mr. SaucePan**! Happy cooking! 🍳
