import { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecommendationList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);

  useEffect(() => {
    generateRecommendations(); // auto-generate on mount
  }, [generateRecommendations]);

  return (
    <div>
      <h2>Recommended Recipes</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations available.</p>
      ) : (
        recommendations.map((recipe) => (
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

export default RecommendationList;
