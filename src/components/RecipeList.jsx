import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes }) => {
  return (
    <div className=" grid-cols-2 gap-4 sm:grid">
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} data={recipe} />
      ))}
    </div>
  );
};
export default RecipeList;
