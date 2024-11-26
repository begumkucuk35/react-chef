import React from "react"

function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  const mappedIngredients = ingredients.map(ingredient => (
    <li key={ingredient}>{ingredient}</li>
  ))
  function handleSubmit(event){
    event.preventDefault();
    const formData =  new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
  }
  return (
    <main>
      <form onSubmit={handleSubmit} className="add-ingredients-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button type="submit">Add ingredient</button>
      </form>
      <ul>
        {mappedIngredients}
      </ul>
    </main>
  );
}

export default Main;
