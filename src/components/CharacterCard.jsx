import { Link } from 'react-router-dom'

function CharacterCard({ id, name, imageUrl }) {
  return (
    <li className="characters-list__item">
      <Link to={`/characters/${id}`}>
        <img src={imageUrl} alt={name} width={80} height={80} />
        <span>{name}</span>
      </Link>
    </li>
  )
}

export default CharacterCard
