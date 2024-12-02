import React from "react";
import IngredientsList from "./IngredientsList";
import ClaudeRecipe from "./ClaudeRecipe";

function Main() {
  const [ingredients, setIngredients] = React.useState([
    "all the main spices",
    "pasta",
    "ground beef",
    "tomato paste",
  ]);
  const [recipeShown, setRecipeShown] = React.useState(false);

  
  function addIngredient(event) {
    event.preventDefault();
    const formEl = event.currentTarget;
    const formData = new FormData(formEl);
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
    formEl.reset();
  }

  function toggleRecipeShown(){
    setRecipeShown( prevValue => !prevValue)
  }

  return (
    <main>
      <form onSubmit={addIngredient} className="add-ingredients-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button type="submit">Add ingredient</button>
      </form>
      {ingredients.length > 0 && (
        <IngredientsList ingredients={ingredients} toggleRecipeShown={toggleRecipeShown}/>
      )}
      {recipeShown && (
        <ClaudeRecipe />
      )}
    </main>
  );
}

export default Main;
