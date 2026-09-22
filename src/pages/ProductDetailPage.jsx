import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Rating from '../components/Rating'

const API_URL = import.meta.env.VITE_API_URL

function ProductDetailPage() {
  const { idProduto } = useParams()
  const [product, setProduct] = useState(null)
  const [error, setError] = useState('')
  const [cartCount, setCartCount] = useState(0)

  function addToCart() {
    setCartCount((count) => count + 1)
  }

  useEffect(() => {
    let active = true

    async function loadProduct() {
      try {
        if (!API_URL) {
          throw new Error('API não configurada.')
        }

        const response = await fetch(API_URL + '/products/' + idProduto)

        if (!response.ok) {
          throw new Error('Erro ao buscar o produto.')
        }

        const data = await response.json()

        if (!data || !data.id) {
          throw new Error('Produto não encontrado.')
        }

        if (active) {
          setProduct(data)
          setError('')
        }
      } catch {
        if (active) {
          setError('Não foi possível carregar este produto.')
        }
      }
    }

    loadProduct()

    return () => {
      active = false
    }
  }, [idProduto])

  return (
    <>
      <Header cartCount={cartCount} />
      <main className="page">
        <Link to="/produtos">Voltar para os produtos</Link>
        {error && <p role="alert">{error}</p>}
        {!product && !error && <p role="status">Carregando produto...</p>}
        {product && !error && (
          <article className="product-detail">
            <img src={product.image} alt={product.title} />
            <div>
              <h1>{product.title}</h1>
              <p>{product.description}</p>
              <Rating value={product.rating?.rate} />
              <p className="product-price">
                {product.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </p>
              <button className="btn-primary" onClick={addToCart}>
                Adicionar ao carrinho
              </button>
            </div>
          </article>
        )}
      </main>
      <Footer />
    </>
  )
}

export default ProductDetailPage
