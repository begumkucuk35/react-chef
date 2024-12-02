import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";

function ClaudeRecipe(props) {
  return (
    <section>
      <h2>Chef Claude Recommends:</h2>
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </section>
  );
}
ClaudeRecipe.propTypes = {
  recipe: PropTypes.string.isRequired,
};
export default ClaudeRecipe;
