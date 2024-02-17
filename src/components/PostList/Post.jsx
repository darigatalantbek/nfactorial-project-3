import './styles.css'
import { Link } from 'react-router-dom';

function Post({recipe}) {

    return (
        <div className="post_container" key={recipe.id}>
            <div>
                <div className='top'>
                <p>{recipe.cuisine} {recipe.mealType[0]}</p>
                <p id='difficulty'>difficulty: {recipe.difficulty}</p>
                </div>
                <div className='name_block'>
                    <Link to={`/recipe/${recipe.id}`} className='name'>{recipe.name}</Link>
                </div>
                
                <p className='instructions'>{recipe.instructions}</p>
                <div className='bottom'>
                    <button id='rating'>{recipe.rating}</button>
                    <p className='time'>Preparation time: {recipe.prepTimeMinutes} min · Cooking time: {recipe.cookTimeMinutes} min</p>
                </div>
            </div>
            <div>
                <img id='image' src={recipe.image} alt="meal"/>
            </div>
        </div>
    )
}

export default Post;