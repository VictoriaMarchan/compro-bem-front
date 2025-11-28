"use client";
import { useState } from "react";

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header>
        <h1 className="logo">ComproBem</h1>

        <div className="hamburger" onClick={() => setOpen(!open)}>
          <div></div><div></div><div></div>
        </div>

        <nav className={open ? "open" : ""}>
          <a href="#faixa">Início</a>
          <a href="#noticias">Notícias</a>
          <a href="#video">Vídeo</a>
        </nav>
      </header>

      <style jsx>{`
        header {
          position: fixed;
          top: 0;
          width: 100%;
          background: #161b22;
          padding: 18px 25px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #2a313b;
          z-index: 20;
        }

        .logo {
          font-size: 22px;
          font-weight: 800;
          background: linear-gradient(90deg, #00d2ff, #4f75ff);
          -webkit-background-clip: text;
          color: transparent;
        }

        .hamburger {
          width: 32px;
          cursor: pointer;
        }

        .hamburger div {
          height: 4px;
          background: #e6edf3;
          margin: 5px 0;
          border-radius: 5px;
        }

        nav {
          display: none;
        }

        nav.open {
          display: block;
          position: absolute;
          right: 20px;
          top: 70px;
          background: #161b22;
          padding: 15px;
          border: 1px solid #2a313b;
          border-radius: 10px;
          width: 180px;
        }

        nav a {
          display: block;
          padding: 10px 0;
          color: #e6edf3;
          text-decoration: none;
          font-weight: 500;
        }

        nav a:hover {
          color: #4f75ff;
        }
      `}</style>
    </>
  );
}
