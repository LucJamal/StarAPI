import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchCharactersList, fetchCharactersByName } from '../services/starWarsAPI'

function HomePage() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetchCharactersList()
      .then(json => setCharacters(json.data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  function handleSearch(e) {
    e.preventDefault()
    const name = search.trim()
    if (!name) return
    setLoading(true)
    setError(null)
    fetchCharactersByName(name)
      .then(results => setCharacters(results))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }

  function handleReset() {
    setSearch('')
    setLoading(true)
    setError(null)
    fetchCharactersList()
      .then(json => setCharacters(json.data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }

  return (
    <section className="page-home" aria-labelledby="home-titulo">
      <h2 id="home-titulo">Personagens de Star Wars</h2>

      <form onSubmit={handleSearch} className="search-form">
        <input
          type="search"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Buscar personagem..."
          aria-label="Buscar personagem por nome"
        />
        <button type="submit">Buscar</button>
        {search && <button type="button" onClick={handleReset}>Limpar</button>}
      </form>

      {loading && <p>Carregando personagens...</p>}
      {error && <p role="alert">{error}</p>}

      <ul className="characters-list">
        {characters.map(c => (
          <li key={c._id} className="characters-list__item">
            <Link to={`/characters/${c._id}`}>
              <img src={c.image} alt={c.name} width={80} height={80} />
              <span>{c.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default HomePage
