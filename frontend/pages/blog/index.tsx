import React, { useEffect, useState } from "react";
import Link from "next/link";

type Post = {
  id: number;
  title: string;
  slug: string;
  summary: string;
  content: string;
};

export default function BlogIndex() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        alert("Erro ao buscar posts: " + e);
      });
  }, []);

  if (loading) return <div>Carregando posts...</div>;

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Blog do Dr. Decifra</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="mb-4">
            <Link href={`/blog/${post.slug}`}>
              <h3 className="text-xl font-semibold text-blue-600 hover:underline">
                {post.title}
              </h3>
            </Link>
            <p className="text-gray-700">{post.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}