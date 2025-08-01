import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favourites: [],
  recommendations: [],

  addRecipe: (newRecipe) => {
    const updatedRecipes = [...get().recipes, newRecipe];
    return set({
      recipes: updatedRecipes,
      filteredRecipes: get().filterRecipes(updatedRecipes, get().searchTerm),
    });
  },

  deleteRecipe: (id) => {
    const updatedRecipes = get().recipes.filter((r) => r.id !== id);
    return set({
      recipes: updatedRecipes,
      filteredRecipes: get().filterRecipes(updatedRecipes, get().searchTerm),
      favourites: get().favourites.filter((r) => r.id !== id),
    });
  },

  updateRecipe: (updatedRecipe) => {
    const updatedRecipes = get().recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    return set({
      recipes: updatedRecipes,
      filteredRecipes: get().filterRecipes(updatedRecipes, get().searchTerm),
    });
  },

  setSearchTerm: (term) =>
    set((state) => ({
      searchTerm: term,
      filteredRecipes: get().filterRecipes(state.recipes, term),
    })),

  filterRecipes: (recipes, term) =>
    recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(term.toLowerCase())
    ),

  toggleFavourite: (recipe) => {
    const exists = get().favourites.find((r) => r.id === recipe.id);
    set((state) => ({
      favourites: exists
        ? state.favourites.filter((r) => r.id !== recipe.id)
        : [...state.favourites, recipe],
    }));
  },

  generateRecommendations: () => {
    const all = get().recipes;
    const recommended = all.slice(0, 3); // just first 3 for demo
    set({ recommendations: recommended });
  },
}));
