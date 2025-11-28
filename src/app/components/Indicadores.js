"use client";

export default function Indicadores() {
  return (
    <div className="card-grid">

      <div className="card-premium">
        <h3>Requisições Hoje</h3>
        <div className="card-value">12</div>
      </div>

      <div className="card-premium">
        <h3>Materiais no Estoque</h3>
        <div className="card-value">84</div>
      </div>

      <div className="card-premium">
        <h3>Fornecedores Ativos</h3>
        <div className="card-value">19</div>
      </div>

      <style jsx>{`
        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px,1fr));
          gap: 25px;
          margin-bottom: 35px;
        }

        .card-premium {
          background: linear-gradient(145deg, #0b0f15, #151b23);
          border: 1px solid #1f2730;
          border-radius: 14px;
          padding: 24px;
          box-shadow:
            0 3px 6px rgba(0,0,0,0.3),
            0 8px 20px rgba(0,0,0,0.4);
          transition: .3s ease;
        }

        .card-premium:hover {
          transform: translateY(-5px);
          box-shadow:
            0 10px 25px rgba(0,0,0,0.45),
            0 15px 35px rgba(0,0,0,0.5);
        }

        .card-premium h3 {
          color: #7ca7ff;
          margin-bottom: 6px;
        }

        .card-value {
          font-size: 2.2rem;
          font-weight: 800;
        }
      `}</style>
    </div>
  );
}
