export function mapCharacterFromApi(apiData) {
  return {
    id: apiData._id,
    name: apiData.name,
    description: apiData.description,
    imageUrl: apiData.image,
  }
}
