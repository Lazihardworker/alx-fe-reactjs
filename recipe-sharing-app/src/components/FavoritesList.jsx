import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const FavoritesList = () => {
  const favorites = useRecipeStore((state) => state.favorites);

  return (
    <div>
      <h2>Favorites</h2>
      {favourites.length === 0 ? (
        <p>No favorite recipes yet.</p>
      ) : (
        favorites.map((recipe) => (
          <div key={recipe.id}>
            <h4>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </h4>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;
