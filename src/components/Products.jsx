import Rating from './Rating'

const products = [
  {
    id: 'featured-tenis',
    title: 'Tênis Esportivo',
    category: 'Calçados',
    price: 299.9,
    rating: 4.5,
    image: 'https://placehold.co/240x240/aa3bff/ffffff?text=Tenis',
  },
  {
    id: 'featured-fone',
    title: 'Fone de Ouvido Bluetooth',
    category: 'Eletrônicos',
    price: 149.9,
    rating: 4.8,
    image: 'https://placehold.co/240x240/3b82f6/ffffff?text=Fone',
  },
  {
    id: 'featured-mochila',
    title: 'Mochila para Notebook',
    category: 'Acessórios',
    price: 189.9,
    rating: 4.2,
    image: 'https://placehold.co/240x240/22c55e/ffffff?text=Mochila',
  },
  {
    id: 'featured-relogio',
    title: 'Relógio Smartwatch',
    category: 'Eletrônicos',
    price: 349.9,
    rating: 4.7,
    image: 'https://placehold.co/240x240/f97316/ffffff?text=Relogio',
  },
]

export default function Products({ onAddToCart }) {
  return (
    <section id="produtos" className="products">
      <h2>Produtos em destaque</h2>
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <p className="product-category">{product.category}</p>
            <h3>{product.title}</h3>
            <Rating value={product.rating} />
            <p className="product-price">
              {product.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
            <button className="btn-secondary" onClick={onAddToCart}>
              Adicionar ao carrinho
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
