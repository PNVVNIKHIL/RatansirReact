import PostBody from "./PostBody";
import PostTitle from "./PostTitle";


function Post(Props)
{
    return(
        <>
            <PostTitle title={Props.title}/>
            <PostBody body={Props.body}/>
        </>
    )
}
export default Post;