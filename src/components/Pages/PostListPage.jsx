import Header from "../Header/Header"
import PostList from "../PostList/PostList"

function PostListPage ({data}) {
    return (
        <div>
            <Header/>
            <PostList data={data}/>
        </div>
    )
}

export default PostListPage;