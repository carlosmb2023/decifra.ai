import React from "react";

export default function Footer() {
  return (
    <footer className="text-center py-10 mt-12 border-t border-cyan-500/30 bg-slate-900">
      <p className="text-sm text-slate-500 font-orbitron">&copy; {new Date().getFullYear()} Decifra.AI &amp; Dr. Decifra. Todos os direitos reservados.</p>
      <p className="text-xs text-slate-600 mt-1 font-inter">Descomplicando a IA com ciência, bom humor e os códigos certos!</p>
    </footer>
  );
}