import Header from "../Header/Header"
import FullPost from "../FullPost/FullPost"
import { useParams } from 'react-router-dom';

function FullPostPage ({data}) {
    const { id } = useParams();
    const recipe = data.find(item => item.id == id);

    return(
        <div>
            <Header/>
            <FullPost recipe={recipe}/>
        </div>   
    )
}

export default FullPostPage;