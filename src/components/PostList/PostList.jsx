import Post from "./Post";

function PostList ({data}) {
    return data.map((recipe) => <Post recipe={recipe} key={recipe.id}/>)
}

export default PostList;