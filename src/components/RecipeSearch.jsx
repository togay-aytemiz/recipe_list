"use client";

import axios from "axios";
import { useState } from "react";
import Input from "@/components/Input";
import RecipeCard from "./RecipeCard";
import RecipeList from "./RecipeList";

const RecipeSearch = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState("");

  const APP_ID = "15998e15";
  const APP_KEY = "f69af326a3024ce8acc9eb71dbf03f88";

  const handleSearch = async () => {
    // console.log("search working");
    try {
      const response = await axios.get("https://api.edamam.com/search", {
        params: {
          q: query,
          app_id: APP_ID,
          app_key: APP_KEY,
          from: 0,
          to: 6,
        },
      });
      //   console.log(response);

      setRecipes(response.data.hits);
      console.log(recipes);
      setError("");
      setQuery("");
    } catch (error) {
      setError("Failed to fetch recipes");
      console.error(error);
    }
  };

  //   console.log(recipes);

  return (
    <div>
      <div>
        <Input query={query} setQuery={setQuery} handleSearch={handleSearch} />

        {error && <p>{error}</p>}
        <RecipeList recipes={recipes} />
      </div>
    </div>
  );
};
export default RecipeSearch;
