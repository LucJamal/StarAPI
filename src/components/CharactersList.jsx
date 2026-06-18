import { useState, useEffect } from 'react'
import CharacterCard from './CharacterCard'
import { fetchCharactersList } from '../services/starWarsAPI'

function CharactersList() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filtro, setFiltro] = useState('')

  useEffect(() => {
    let cancelled = false

    async function loadCharacters() {
      try {
        setLoading(true)
        setError(null)
        const data = await fetchCharactersList()
        if (!cancelled) setCharacters(data)
      } catch (err) {
        if (!cancelled) setError(err.message ?? 'Erro ao carregar.')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    loadCharacters()
    return () => { cancelled = true }
  }, [])

  const listaFiltrada = characters.filter(c =>
    c.name.toLowerCase().includes(filtro.toLowerCase())
  )

  const visiveis = filtro ? listaFiltrada : listaFiltrada.slice(0, 20)

  return (
    <section className="page-home" aria-labelledby="home-titulo">
      <h2 id="home-titulo">Personagens de Star Wars</h2>

      <form className="search-form" onSubmit={e => e.preventDefault()}>
        <input
          type="search"
          value={filtro}
          onChange={e => setFiltro(e.target.value)}
          placeholder="Buscar personagem..."
          aria-label="Buscar personagem por nome"
        />
      </form>

      <p className="mensagem-info">
        Mostrando {visiveis.length} personagem(ns)
      </p>

      {loading && <p>Carregando personagens...</p>}
      {error && <p role="alert">{error}</p>}
      {!loading && !error && visiveis.length === 0 && (
        <p>Nenhum personagem encontrado.</p>
      )}
      {!loading && !error && visiveis.length > 0 && (
        <ul className="characters-list">
          {visiveis.map(c => (
            <CharacterCard key={c.id} {...c} />
          ))}
        </ul>
      )}
    </section>
  )
}

export default CharactersList
