import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Rating from '../components/Rating'

const API_URL = import.meta.env.VITE_API_URL

function ProductsPage() {
  const [cartCount, setCartCount] = useState(0)
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState('electronics')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  function addToCart() {
    setCartCount((count) => count + 1)
  }

  function changeCategory(newCategory) {
    if (newCategory === category) {
      return
    }

    setLoading(true)
    setError('')
    setProducts([])
    setCategory(newCategory)
  }

  // Busca os produtos novamente somente quando a categoria muda.
  useEffect(() => {
    let active = true

    async function loadProducts() {
      try {
        if (!API_URL) {
          throw new Error('API não configurada.')
        }

        const response = await fetch(API_URL + '/products/category/' + category)

        if (!response.ok) {
          throw new Error('Erro ao buscar os produtos.')
        }

        const data = await response.json()

        if (!Array.isArray(data)) {
          throw new Error('Resposta inválida da API.')
        }

        if (active) {
          setProducts(data)
        }
      } catch {
        if (active) {
          setError(
            'Não foi possível carregar os produtos. Tente novamente mais tarde.',
          )
        }
      } finally {
        if (active) {
          setLoading(false)
        }
      }
    }

    loadProducts()

    // Ignora a resposta anterior ao trocar de categoria ou sair da página.
    return () => {
      active = false
    }
  }, [category])

  return (
    <>
      <Header cartCount={cartCount} />
      <main className="page">
        <h1>Todos os produtos</h1>
        <div className="category-filters">
          <button
            className="btn-primary"
            aria-pressed={category === 'electronics'}
            onClick={() => changeCategory('electronics')}
          >
            Eletrônicos
          </button>
          <button
            className="btn-primary"
            aria-pressed={category === 'jewelery'}
            onClick={() => changeCategory('jewelery')}
          >
            Joias
          </button>
        </div>
        {loading && <p role="status">Carregando produtos...</p>}
        {error && <p role="alert">{error}</p>}
        {!loading && !error && products.length === 0 && (
          <p>Nenhum produto encontrado.</p>
        )}
        <div className="product-list">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.title} />
              <p className="product-category">{product.category}</p>
              <h2>{product.title}</h2>
              <Rating value={product.rating?.rate} />
              <p className="product-price">
                {product.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </p>
              <Link to={'/produtos/' + product.id}>Ver mais</Link>
              <button className="btn-secondary" onClick={addToCart}>
                Adicionar ao carrinho
              </button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default ProductsPage
