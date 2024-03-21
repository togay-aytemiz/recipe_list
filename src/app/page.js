import App from "@/components/App";
import RecipeSearch from "@/components/RecipeSearch";
import Image from "next/image";

export default function Home() {
  return (
    <div className="my-10 mx-4 sm:mx-auto max-w-[1000px] flex flex-col gap-4 bg-white rounded-lg shadow-md p-4">
      <App />
      <RecipeSearch />
    </div>
  );
}
