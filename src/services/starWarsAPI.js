import { mapCharacterFromApi } from '../utils/mapCharacter'

const BASE_URL = 'https://starwars-databank-server.onrender.com/api/v1'

async function parseResponse(res, msg) {
  if (!res.ok) throw new Error(msg)
  return res.json()
}

export async function fetchCharactersList(limit = 1000) {
  const res = await fetch(`${BASE_URL}/characters?page=1&limit=${limit}`)
  const json = await parseResponse(
    res, 'Não foi possível carregar a lista de personagens.'
  )
  return json.data.map(mapCharacterFromApi)
}

export async function fetchCharactersById(id) {
  const res = await fetch(`${BASE_URL}/characters/${id}`)
  if (res.status === 404) return null
  const data = await parseResponse(res, 'Não foi possível carregar o personagem.')
  return mapCharacterFromApi(data)
}
