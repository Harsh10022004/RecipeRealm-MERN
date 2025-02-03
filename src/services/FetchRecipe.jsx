import axios from "axios";

const API_KEY = import.meta.env.VITE_SPONACULAR_API_KEY; // Correctly access the variable
const BASE_URL = `https://api.spoonacular.com/recipes/`;

export const fetchAllRecipes = async () => {
    try {
        const response = await axios.get(`${BASE_URL}complexSearch?apiKey=${API_KEY}`);
        console.log(response.data.results || []);
        return response.data.results || []; // Return an empty array if no results
    } catch (error) {
        console.error("Error fetching all recipes:", error.message);
        return [];
    }
};

export const fetchRecipes = async (recipe) => {
    try {
        const response = await axios.get(`${BASE_URL}complexSearch?query=${recipe}&apiKey=${API_KEY}`);
        console.log(response.data.results || []);
        return response.data.results || [];
    } catch (error) {
        console.error(`Error fetching recipes for ${recipe}:`, error.message);
        return [];
    }
};

export const fetchRecipeDetails = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}${id}/analyzedInstructions?apiKey=${API_KEY}`);
        console.log(response.data || []);
        return response.data || []; // Return an empty array if no results
    } catch (error) {
        console.error(`Error fetching instructions for recipe ID ${id}:`, error.message);
        return [];
    }
};
