const BASE_URL = 'https://starwars-databank-server.onrender.com/api/v1'

async function parseResponse(res, msg) {
  if (!res.ok) throw new Error(msg)
  return res.json()
}

export async function fetchCharactersList() {
  const res = await fetch(`${BASE_URL}/characters`)
  return parseResponse(res, 'Não foi possível carregar a lista de personagens.')
}

export async function fetchCharactersById(id) {
  const res = await fetch(`${BASE_URL}/characters/${id}`)
  if (res.status === 404) return null
  return parseResponse(res, 'Não foi possível carregar o personagem.')
}
