import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="characters-detail characters-detail--empty">
      <h2>404 — Página não encontrada</h2>
      <p>A página que você procura não existe.</p>
      <Link to="/" className="characters-detail__back">
        Voltar ao início
      </Link>
    </section>
  )
}

export default NotFoundPage
