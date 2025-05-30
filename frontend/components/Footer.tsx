import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-200 text-center py-3 text-gray-700 mt-8">
      <span>© {new Date().getFullYear()} Dr. Decifra. Descomplicando a IA com ciência, bom humor e os códigos certos!</span>
    </footer>
  );
}