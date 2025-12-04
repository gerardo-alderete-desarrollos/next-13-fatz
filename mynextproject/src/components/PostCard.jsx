"use client"
import Link from "next/link";

function PostCard({ post }) {
    return (
        <div key={post.id} className="bg-gray-950 p-10" >
            <Link href={`/posts/${post.id}`}>
                <h3 className='text-xl font-bold mb-4'>{post.id}.- {post.title}</h3>
            </Link>
            <p>{post.body}</p>
            <button onClick={() => alert('click' + post.id)}>click</button>
        </div >
    )
}

export default PostCard;