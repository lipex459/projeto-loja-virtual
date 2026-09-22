import { Link } from 'react-router'

function Header({ cartCount = 0 }) {
  return (
    <header className="header">
      <div className="logo">
        <i className="fa-solid fa-bag-shopping" aria-hidden="true" /> ReactShop
      </div>
      <ul className="nav">
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/produtos">Produtos</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
      </ul>
      <div className="header-actions">
        <span className="icon-button" role="img" aria-label="Busca">
          <i className="fa-solid fa-magnifying-glass" aria-hidden="true" />
        </span>
        <span className="icon-button" role="img" aria-label="Favoritos">
          <i className="fa-solid fa-heart" aria-hidden="true" />
        </span>
        <span
          className="icon-button cart"
          role="status"
          aria-label={'Carrinho com ' + cartCount + ' itens'}
        >
          <i className="fa-solid fa-cart-shopping" aria-hidden="true" />
          <span className="badge">{cartCount}</span>
        </span>
      </div>
    </header>
  )
}
export default Header
