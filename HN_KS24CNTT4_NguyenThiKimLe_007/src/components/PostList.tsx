import { Heart } from 'lucide-react'
import React from 'react'

interface Post {
  title: string;
  content: string;
  liked: boolean;
}

interface PostListProps {
  posts: Post[];
  onToggleLike: (index: number) => void;
}

export default function PostList({ posts, onToggleLike }: PostListProps) {
  return (
    <div className="w-130 bg-[#f1efefc0] rounded-xl flex flex-col justify-center items-center gap-5 py-10 my-6">
      {posts.map((post, index) => (
        <div key={index} className="w-110 h-auto bg-white rounded-sm">
          <p className="font-normal text-2xl mt-3 ml-3">{post.title}</p>
          <p className="opacity-75 m-3">{post.content}</p>
          <hr />
          <div className="flex justify-between items-center mx-3 my-4">
            <button onClick={() => onToggleLike(index)}>
              <Heart
                className={post.liked ? "text-red-500 fill-red-500" : "text-red-500"}
              />
            </button>
            <button className="w-10 h-10 bg-[#808080] rounded-full text-white">
              S
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
