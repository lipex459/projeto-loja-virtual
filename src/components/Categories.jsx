function Categories() {
  return (
    <section className="categories">
      <h2>Categorias</h2>

      <div className="category-list">
        <div className="category-card">
          <span className="category-icon">
            <i className="fa-solid fa-shirt" aria-hidden="true" />
          </span>
          <p>Roupas</p>
        </div>
        <div className="category-card">
          <span className="category-icon">
            <i
              className="fa-solid fa-mobile-screen-button"
              aria-hidden="true"
            />
          </span>
          <p>Eletrônicos</p>
        </div>
        <div className="category-card">
          <span className="category-icon">
            <i className="fa-solid fa-shoe-prints" aria-hidden="true" />
          </span>
          <p>Calçados</p>
        </div>

        <div className="category-card">
          <span className="category-icon">
            <i className="fa-solid fa-briefcase" aria-hidden="true" />
          </span>
          <p>Acessórios</p>
        </div>
      </div>
    </section>
  )
}

export default Categories
