import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.css'
import './App.css'
import App from './App'
import ProductsPage from './pages/ProductsPage'
import ContatoPage from './pages/ContatoPage'
import PageNotFound from './pages/PageNotFound'
import ProductDetailPage from './pages/ProductDetailPage'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/produtos', element: <ProductsPage /> },
  { path: '/produtos/:idProduto', element: <ProductDetailPage /> },
  { path: '/contato', element: <ContatoPage /> },
  { path: '*', element: <PageNotFound /> },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
