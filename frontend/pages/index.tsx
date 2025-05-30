import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h2 className="text-4xl font-bold mb-4 text-blue-600 text-center">
        Seja bem-vindo ao universo Dr. Decifra!
      </h2>
      <p className="text-xl text-center mb-8">
        Descomplicando a IA com ciência, bom humor e os códigos certos!
      </p>
      <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full animate-pulse mb-2"></div>
      <span className="italic text-gray-500">#BoraDescomplicar</span>
    </div>
  );
}