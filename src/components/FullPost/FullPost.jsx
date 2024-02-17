import './styles.css'

function FullPost({recipe}) {
    return (
        <div className='full_post'>
            <div className='post_top'>
                <p className='cuisine'>{recipe.cuisine} {recipe.mealType[0]}</p>
                <div className='info'>
                    <p>Difficulty: {recipe.difficulty}</p>
                    <p>Servings: {recipe.servings}</p>
                    <p>Calories: {recipe.caloriesPerServing}</p>
                </div>
            </div>
            <div>
                <h1 className='meal_name'>{recipe.name}</h1>
            </div>
            <div className='post_body'>
                <div> 
                    <p className='post_title'>Ingredients:</p>
                    
                    <ul className='text'>
                        {recipe.ingredients.map((item) =>(
                            <li>{item}</li>
                        ))}
                    </ul>
                    <p className='post_title'>Instructions:</p>
                    <ul className='text'>
                        {recipe.instructions.map((item) => (
                            <li>{item}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <img id='post_image' src={recipe.image} alt="meal"></img>
                </div>
            </div>           
        </div>
    )
}

export default FullPost;