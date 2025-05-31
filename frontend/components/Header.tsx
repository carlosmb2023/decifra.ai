import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-slate-900 border-b-2 border-cyan-500/30 shadow-lg py-4 px-4 md:px-8 flex flex-col md:flex-row items-center justify-between relative z-50">
      <div className="flex items-center space-x-3">
        <img src="/logo.svg" alt="Decifra.AI Logo" className="h-10 w-auto" />
        <span className="text-2xl font-bold text-cyan-400 font-orbitron tracking-wide" style={{textShadow: "0 0 10px #22d3ee55"}}>Decifra.AI</span>
      </div>
      <nav className="mt-3 md:mt-0 flex space-x-2 md:space-x-6">
        <Link href="/" className="tab-button-futuristic px-3 py-2 text-sm">Home</Link>
        <Link href="/blog" className="tab-button-futuristic px-3 py-2 text-sm">Blog</Link>
        <Link href="/login" className="tab-button-futuristic px-3 py-2 text-sm">Login</Link>
      </nav>
    </header>
  );
}