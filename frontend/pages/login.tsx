import React from "react";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form className="bg-white p-6 rounded shadow max-w-xs w-full">
        <div className="mb-4">
          <label className="block mb-2 font-semibold" htmlFor="email">E-mail</label>
          <input className="w-full border border-gray-300 p-2 rounded" type="email" id="email" placeholder="seu@email.com" />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold" htmlFor="password">Senha</label>
          <input className="w-full border border-gray-300 p-2 rounded" type="password" id="password" placeholder="********" />
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Entrar</button>
      </form>
    </div>
  );
}