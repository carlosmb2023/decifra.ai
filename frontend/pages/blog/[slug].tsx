import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

type Post = {
  id: number;
  title: string;
  slug: string;
  summary: string;
  content: string;
};

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    fetch(`http://localhost:8000/api/v1/posts/${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error("Não encontrado");
        return res.json();
      })
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setPost(null);
      });
  }, [slug]);

  if (loading) return <div>Carregando post...</div>;
  if (!post) return <div>Post não encontrado.</div>;

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
      <p className="mb-2 text-gray-500">{post.summary}</p>
      <div className="text-gray-800">{post.content}</div>
    </div>
  );
}