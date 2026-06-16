import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchCharactersList } from '../services/starWarsAPI'

function HomePage() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchCharactersList()
      .then(json => setCharacters(json.data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <p>Carregando personagens...</p>
  if (error) return <p role="alert">{error}</p>

  return (
    <section className="page-home" aria-labelledby="home-titulo">
      <h2 id="home-titulo">Personagens de Star Wars</h2>
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
