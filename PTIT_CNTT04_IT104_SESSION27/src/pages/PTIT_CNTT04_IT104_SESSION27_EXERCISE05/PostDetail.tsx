import React from "react";
import { useParams, Link } from "react-router-dom";
import { posts } from "./Post";

export default function PostDetail() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return <p>Bài viết không tồn tại.</p>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
      <p className="text-gray-700 mb-4">{post.content}</p>
      <Link
        to="/blog/posts"
        className="text-blue-600 hover:underline inline-block mt-2"
      >
        ← Quay lại danh sách
      </Link>
    </div>
  );
}
