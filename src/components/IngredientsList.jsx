import PropTypes from 'prop-types';

function IngredientsList(props){
    const mappedIngredients = props.ingredients.map((ingredient) => (
        <li key={ingredient}>{ingredient}</li>
      ));
    return(
        <section>
          <h2>Ingredients on hand:</h2>
          <ul className="ingredients-list" aria-live="polite">
            {mappedIngredients}
          </ul>
          {props.ingredients.length > 3 && (
            <div className="get-recipe-container">
              <div>
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients.</p>
              </div>
              <button onClick={props.toggleRecipeShown}>Get a recipe</button>
            </div>
          )}
        </section>
    )
}
IngredientsList.propTypes = {
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    toggleRecipeShown: PropTypes.func.isRequired,
  };
export default IngredientsList