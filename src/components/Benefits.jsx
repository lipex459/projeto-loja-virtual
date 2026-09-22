function Benefits() {
  return (
    <section className="benefits">
      <div className="info-card">
        <span className="info-icon">
          <i className="fa-solid fa-truck-fast" aria-hidden="true" />
        </span>
        <h3>Entrega rápida</h3>
        <p>Receba seus produtos em até 3 dias úteis em todo o Brasil.</p>
      </div>

      <div className="info-card">
        <span className="info-icon">
          <i className="fa-solid fa-lock" aria-hidden="true" />
        </span>
        <h3>Pagamento seguro</h3>
        <p>Seus dados protegidos com a mais alta tecnologia de criptografia.</p>
      </div>

      <div className="info-card">
        <span className="info-icon">
          <i className="fa-solid fa-rotate-left" aria-hidden="true" />
        </span>
        <h3>Devolução grátis</h3>
        <p>Não gostou? Devolva em até 7 dias sem nenhum custo.</p>
      </div>
    </section>
  )
}

export default Benefits
