import { useState } from 'react'
import hero from './assets/hero.png'
import Benefits from './components/Benefits'
import Categories from './components/Categories'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Products from './components/Products'

function App() {
  const [cartCount, setCartCount] = useState(0)

  function addToCart() {
    setCartCount((count) => count + 1)
  }

  return (
    <div className="app">
      <Header cartCount={cartCount} />
      <main>
        <HeroSection
          titulo="Ofertas imperdíveis para você"
          subtitulo="Até 30% de desconto em produtos selecionados. Aproveite!"
          textoBotao="Ver ofertas"
          imagemHero={hero}
        />
        <Categories />
        <Products onAddToCart={addToCart} />
        <Benefits />
      </main>
      <Footer />
    </div>
  )
}

export default App
