import { Link } from 'react-router'
import Header from '../components/Header'
import Footer from '../components/Footer'

function PageNotFound() {
  return (
    <>
      <Header />
      <main className="page">
        <h1>Página não encontrada</h1>
        <p>O endereço acessado não existe.</p>
        <Link to="/">Voltar para o início</Link>
      </main>
      <Footer />
    </>
  )
}

export default PageNotFound
