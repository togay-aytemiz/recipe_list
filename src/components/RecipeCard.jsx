import Image from "next/image";

const RecipeCard = ({ data }) => {
  //   console.log(data);
  const { label, image, url, ingredients } = data.recipe;
  //   console.log(recipe);
  return (
    <>
      <div className="p-4 border rounded-lg flex justify-center items-center flex-col gap-4">
        <h1 className="text-lg font-semibold">{label}</h1>
        <img src={image} alt="" className=" rounded-lg" />
      </div>
    </>
  );
};
export default RecipeCard;
