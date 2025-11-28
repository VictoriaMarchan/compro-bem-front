"use client";

import { useEffect, useState } from "react";

export default function Noticias() {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    fetch("/api/noticias")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setNoticias(data);
        } else {
          console.error("API NÃO RETORNOU ARRAY:", data);
        }
      })
      .catch(err => console.error("Erro no fetch:", err));
  }, []);

  return (
    <section id="noticias">
      <h2 style={{ marginBottom: "20px" }}>Últimas Notícias</h2>

      <div className="card-grid">
        {noticias.map((n, i) => (
          <div key={i} className="card-premium">
            <h3>{n.titulo}</h3>
            <p>{n.chamada}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 25px;
        }
      `}</style>
    </section>
  );
}

