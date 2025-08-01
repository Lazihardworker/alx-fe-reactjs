import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const FavouritesList = () => {
  const favourites = useRecipeStore((state) => state.favourites);

  return (
    <div>
      <h2>Favourites</h2>
      {favourites.length === 0 ? (
        <p>No favourite recipes yet.</p>
      ) : (
        favourites.map((recipe) => (
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

export default FavouritesList;
