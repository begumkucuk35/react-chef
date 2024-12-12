import React from "react";
import IngredientsList from "./IngredientsList";
import ClaudeRecipe from "./ClaudeRecipe";
import {getRecipeFromHuggingFace} from "../../ai"

function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  const [recipe, setRecipe] = React.useState("");
  const recipeSection = React.useRef(null)
  
  React.useEffect(() =>{
    if(recipe !== "" && recipeSection.current !== null){
      recipeSection.current.scrollIntoView({behavior: "smooth"})
    }
  }, [recipe])
  function addIngredient(event) {
    event.preventDefault();
    const formEl = event.currentTarget;
    const formData = new FormData(formEl);
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
    formEl.reset();
  }

  async function getRecipe(){
    const recipeMarkdown = await getRecipeFromHuggingFace(ingredients)
    setRecipe(recipeMarkdown)
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
        <IngredientsList myRef={recipeSection} ingredients={ingredients} getRecipe={getRecipe} />
      )}
      {recipe && (
        <ClaudeRecipe recipe={recipe}/>
      )}
    </main>
  );
}

export default Main;
