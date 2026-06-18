import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchCharactersById } from '../services/starWarsAPI'

function StarWarsDetailPage() {
  const { id } = useParams()
  const [characters, setcharacters] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    async function loadCharacters() {
      try {
        setLoading(true)
        setError(null)
        setcharacters(null)
        const data = await fetchCharactersById(id)
        if (!cancelled) setcharacters(data)
      } catch (err) {
        if (!cancelled) setError(err.message ?? 'Erro ao carregar.')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    loadCharacters()
    return () => { cancelled = true }
  }, [id])

  if (loading) return <p>Carregando personagem...</p>
  if (error) return <p role="alert">{error}</p>
  if (!characters) return (
    <section className="characters-detail characters-detail--empty">
      <h2> Personagem  não encontrado</h2>
      <p>Não existe um Personagem com o id &quot;{id}&quot;.</p>
      <Link to="/" className="characters-detail__back">
        Voltar ao catálogo
      </Link>
    </section>
  )

  return (
    <section className="characters-detail" aria-labelledby="detalhe-titulo">
      <Link to="/" className="characters-detail__back">
        ← Voltar ao catálogo
      </Link>

      <article className="characters-detail__card">
        <div className="characters-detail__media">
          <img src={characters.imageUrl} alt={characters.name} width={160} height={160} />
        </div>
        <div className="characters-detail__body">
          <h2 id="detalhe-titulo">{characters.name}</h2>
          <p className="characters-detail__desc">{characters.description}</p>
        </div>
      </article>
    </section>
  )
}

export default StarWarsDetailPage
