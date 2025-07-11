import { getUniqueAnimeData } from "./utils"

export async function getAnimeSeason() {
  const response = await fetch(`${process.env.API_URL}/seasons/now?limit=15`)
  if (!response.ok) throw new Error("Error al obtener la temporada")
  const data = await response.json()

  return getUniqueAnimeData(data.data)
}

export async function getTopAnimes() {
  const response = await fetch(`${process.env.API_URL}/top/anime?limit=15`)
  if (!response.ok) throw new Error("Error al obtener los animes top")
  const data = await response.json()

  return getUniqueAnimeData(data.data)
}

export async function getTopMangas() {
  const response = await fetch(`${process.env.API_URL}/top/manga?limit=15`)
  if (!response.ok) throw new Error("Error al obtener los mangas top")
  const data = await response.json()

  return getUniqueAnimeData(data.data)
}
