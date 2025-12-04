import PostCard from '@/src/components/PostCard';
import './Post.css';

async function loadPost() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    //return await new Promise((resolve) => setTimeout(resolve, 5000))
    return data;
}

async function PostPages() {
    const posts = await loadPost();
    console.log(posts);

    return (
        <div className="grid-post">
            {
                posts.map(post =>(
                    <PostCard post={post} key={post.id}/>
                ))
            }
        </div>
    )
}

export default PostPages