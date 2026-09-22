import { Link } from 'react-router'

function Footer() {
  return (
    <footer id="contato" className="footer">
      <div className="footer-column">
        <h3>ReactShop</h3>
        <p>A melhor loja virtual para você encontrar tudo o que precisa.</p>
      </div>

      <div className="footer-column">
        <h3>Links úteis</h3>
        <ul>
          <li>
            <Link to="/produtos">Produtos</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
          <li>
            <Link to="/">Início</Link>
          </li>
        </ul>
      </div>

      <div className="footer-column">
        <h3>Redes sociais</h3>
        <div className="social-icons">
          <span className="icon-button">
            <i
              className="fa-brands fa-facebook"
              role="img"
              aria-label="Facebook"
            />
          </span>
          <span className="icon-button">
            <i
              className="fa-brands fa-instagram"
              role="img"
              aria-label="Instagram"
            />
          </span>
          <span className="icon-button">
            <i
              className="fa-brands fa-twitter"
              role="img"
              aria-label="Twitter"
            />
          </span>
        </div>
      </div>

      <p className="copyright">
        © 2026 ReactShop. Todos os direitos reservados.
      </p>
    </footer>
  )
}

export default Footer
    