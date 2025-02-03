import React, { useEffect } from "react";
import { fetchAllRecipes, fetchRecipes, fetchRecipeDetails } from "../services/FetchRecipe";
import { useState } from "react";
import RecipeTile from "../tiles/RecipeTile";
import RecipeDetails from "../pages/RecipeDetails";

export default function Home() {
    const [recipes, setRecipes] = useState([]);
    const [recipeDetails, setRecipeDetails] = useState([]);
    const [showRecipe, setShowRecipe] = useState(false);

    useEffect(()=> handleAllRecipes, []);

    const handleClick = (id) => {
        console.log(id);
        setShowRecipe((prev) => {return !prev});
        handleRecipeDetails(id);
    }

    const handleRecipeDetails = async (id) => {
        try {
            const instructions = await fetchRecipeDetails(id);
            setRecipeDetails(instructions);
            console.log(instructions);
        }
        catch (error) {
            console.error("Error fetching recipe details:", error);
        }
    }

    const handleAllRecipes = async () => {
        try {
            const allRecipes = await fetchAllRecipes();
            setRecipes(allRecipes);
        } catch (error) {
            console.error("Error fetching recipes:", error);
        }
    };

    const handleRecipe = async (recipe) => { 
        try {
            const recipes = await fetchRecipes(recipe);
            setRecipes(recipes);
        }
        catch (error) {
            console.error("Error fetching recipes:", error);
        }
    }

    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="min-h-screen bg-gradient-to-r from-orange-500 to-amber-500">
            <div className="p-6">
                <div className="relative w-2/3 mx-auto bg-orange-600 rounded-xl shadow-2xl p-6 mb-6 border-2 border-orange-700 hover:border-orange-800 transition-all duration-300 overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-orange-800 to-red-700"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-red-700 to-orange-800"></div>
                    <h1 className="text-5xl font-black text-center text-orange-100 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-300" 
                        style={{ textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                        Recipe Domain
                    </h1>
                </div>
            </div>
            <div className="flex justify-center px-6">
                <input
                    type="text"
                    placeholder="Search for recipes..."
                    className="w-2/3 p-4 rounded-full border-4 border-orange-600 shadow-2xl 
                    focus:ring-4 focus:ring-orange-300 focus:border-orange-700 
                    transition-all duration-300 outline-none bg-slate-700  
                    text-xl placeholder-orange-50/70 hover:border-orange-500
                    focus:bg-slate-600 text-orange-50"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                    className="ml-4 px-8 py-4 bg-blue-600 text-white font-black 
                    rounded-full hover:bg-blue-500 transform hover:scale-110 
                    transition duration-300 shadow-xl text-xl hover:shadow-2xl 
                    hover:shadow-blue-900/20 active:bg-blue-700"
                    onClick={() => handleRecipe(searchTerm)}
                >
                    Discover Recipes
                </button>
            </div>
            {   
                showRecipe ? <RecipeDetails recipeData={recipeDetails}/> :
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-12">
                    {recipes.map((recipe) => (
                        <RecipeTile handleClick={handleClick} id={recipe.id} image={recipe.image} title={recipe.title} />
                    ))}
                </div>
            }
        </div>
    );
}