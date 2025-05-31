import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

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
    import("../../styles/futuristic-blog.css");
  }, []);

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

  if (loading) return <div className="text-center text-cyan-400 mt-10 animate-pulse">Carregando post...</div>;
  if (!post) return <div className="text-center text-red-400 mt-10">Post não encontrado.</div>;

  return (
    <>
      <Head>
        <title>{post.title} | Decifra.AI Blog</title>
        <meta name="description" content={post.summary} />
        <link rel="icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Orbitron:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <article className="card-futuristic p-8 md:p-12 rounded-lg max-w-3xl mx-auto mt-8 mb-12 relative shadow-lg">
        <h2 className="text-4xl font-bold text-cyan-400 mb-4 font-orbitron" style={{textShadow: "0 0 10px #22d3ee55"}}>{post.title}</h2>
        <p className="mb-4 text-sky-300 text-lg font-orbitron">{post.summary}</p>
        <div className="prose prose-invert max-w-none text-slate-200" dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </>
  );
}