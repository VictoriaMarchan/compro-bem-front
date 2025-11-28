"use client";

export default function FaixaPrincipal() {
  return (
    <div className="faixa">
      <h1>ComproBem S.A.</h1>
      <p>Sistema de Requisições de Materiais</p>

      <style jsx>{`
        .faixa {
          background: linear-gradient(135deg, #111827, #0d1117);
          padding: 120px 20px 80px;
          text-align: center;
          border-bottom: 1px solid #1f2730;
        }

        h1 {
          font-size: 48px;
          font-weight: 800;
          background: linear-gradient(90deg, #00d2ff, #4f75ff);
          -webkit-background-clip: text;
          color: transparent;
        }

        p {
          font-size: 20px;
          margin-top: 15px;
          opacity: 0.8;
        }
      `}</style>
    </div>
  );
}
