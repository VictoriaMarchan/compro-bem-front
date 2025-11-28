"use client";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="side-logo">ComproBem</div>

      <ul>
        <li className="active">Início</li>
        <li>Notícias</li>
        <li>Vídeos</li>
        <li>Documentos</li>
      </ul>
    </aside>
  );
}
