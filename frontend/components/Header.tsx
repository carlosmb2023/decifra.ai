import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">Dr. Decifra Blog</h1>
      <nav>
        <Link href="/" className="mr-4 hover:underline">Home</Link>
        <Link href="/blog" className="mr-4 hover:underline">Blog</Link>
        <Link href="/login" className="hover:underline">Login</Link>
      </nav>
    </header>
  );
}