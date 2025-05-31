import React, { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";

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
  const [activeTab, setActiveTab] = useState("posts");

  useEffect(() => {
    // Importa o CSS futurista apenas nesta página
    import("../../styles/futuristic-blog.css");
  }, []);

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

  if (loading) return <div className="text-center text-cyan-400 mt-10 animate-pulse">Carregando posts...</div>;

  return (
    <>
      <Head>
        <title>Decifra.AI Blog Futurista</title>
        <meta name="description" content="Blog do Dr. Decifra - IA, prompts e tecnologia de ponta!" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Orbitron:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <div className="container mx-auto px-2 md:px-8 py-6">
        <header className="py-8 md:py-12 text-white relative overflow-hidden rounded-lg mb-8 card-futuristic">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-sky-900 to-purple-900 opacity-70 rounded-lg"></div>
          <div className="absolute inset-0" style={{backgroundImage: `url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 100 100%27%3E%3Cdefs%3E%3Cpattern id=%27p%27 width=%2710%27 height=%2710%27 patternUnits=%27userSpaceOnUse%27%3E%3Cpath d=%27M0 5h5M5 0v5%27 stroke=%27%230e7490%27 stroke-width=%270.5%27/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=%27100%25%27 height=%27100%25%27 fill=%27url(%23p)%27/%3E%3C/svg%3E')`, opacity: 0.05}}></div>
          <div className="relative z-10 text-center">
            <img src="/logo.svg" alt="Decifra.AI" className="mx-auto mb-4" style={{height: 48}} />
            <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight" style={{textShadow: "0 0 15px rgba(56, 189, 248, 0.7)"}}>
              <span className="text-cyan-400">Decifra</span><span className="text-sky-400">.AI</span> <span className="text-slate-200">Blog</span>
            </h1>
            <p className="mt-2 text-lg md:text-xl text-sky-200 max-w-2xl mx-auto">
              Descomplicando a IA com ciência, bom humor e os códigos certos!
            </p>
          </div>
        </header>
        <nav className="bg-slate-800/80 backdrop-blur-md shadow-xl sticky top-0 z-40 border-b border-slate-700 rounded-lg mb-8">
          <div className="flex justify-center items-center space-x-2 overflow-x-auto py-3">
            <button className={`tab-button-futuristic px-3 py-2 text-xs sm:text-sm whitespace-nowrap${activeTab === "posts" ? " active" : ""}`} onClick={() => setActiveTab("posts")}>Posts Recentes</button>
            <button className={`tab-button-futuristic px-3 py-2 text-xs sm:text-sm whitespace-nowrap${activeTab === "sobre" ? " active" : ""}`} onClick={() => setActiveTab("sobre")}>Sobre o Blog</button>
          </div>
        </nav>
        <main>
          <section className={`content-section-futuristic card-futuristic p-6 md:p-8 rounded-lg mb-8${activeTab === "posts" ? " active" : ""}`} id="posts">
            <h2 className="text-3xl font-bold text-cyan-400 mb-6 border-b-2 border-cyan-500/30 pb-3 font-orbitron">Posts Recentes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts.map((post) => (
                <div key={post.id} className="card-futuristic hover:shadow-cyan-400/30 transition-shadow p-5 rounded-lg flex flex-col justify-between">
                  <Link href={`/blog/${post.slug}`} className="block group">
                    <h3 className="text-xl font-semibold text-cyan-400 group-hover:underline font-orbitron mb-2">{post.title}</h3>
                    <p className="text-slate-400 mb-2">{post.summary}</p>
                    <span className="inline-block mt-2 text-xs text-sky-300 group-hover:text-cyan-400 transition">Ler mais &rarr;</span>
                  </Link>
                </div>
              ))}
            </div>
          </section>
          <section className={`content-section-futuristic card-futuristic p-6 md:p-8 rounded-lg mb-8${activeTab === "sobre" ? " active" : ""}`} id="sobre">
            <h2 className="text-3xl font-bold text-cyan-400 mb-6 border-b-2 border-cyan-500/30 pb-3 font-orbitron">Sobre o Blog</h2>
            <p className="text-slate-300 leading-relaxed mb-4">O <span className="text-cyan-400 font-orbitron">Decifra.AI Blog</span> é o seu portal para dominar Inteligência Artificial, prompts, criatividade e tecnologia de ponta. Aqui você encontra dicas, guias, tutoriais e novidades para descomplicar o universo da IA, sempre com o toque do Dr. Decifra!</p>
            <img src="/avatar-dr-decifra.svg" alt="Dr. Decifra" className="mx-auto my-6 rounded-full shadow-lg" style={{width: 80, height: 80}} />
            <p className="text-slate-400 text-center italic">Dr. Decifra aqui! Descomplicando a IA com ciência, bom humor e os códigos certos!</p>
          </section>
        </main>
      </div>
    </>
  );
}