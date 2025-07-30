import { Anime } from "@/types/anime"
import { getUniqueAnimeData } from "./utils"

//* Obtener la lista de los 15 primeros animes de la temporada actual
export async function getAnimeSeason() {
  const response = await fetch(`${process.env.API_URL}/seasons/now?limit=15`, {
    next: { revalidate: 300 }
  })

  if (!response.ok) throw new Error("Error al obtener la temporada")
  const data = await response.json()

  return getUniqueAnimeData(data.data)
}

//* Obtener la lista de los 15 primeros animes populares
export async function getTopAnimes() {
  const response = await fetch(`${process.env.API_URL}/top/anime?limit=15`, {
    next: { revalidate: 300 }
  })

  if (!response.ok) throw new Error("Error al obtener los animes top")
  const data = await response.json()

  return getUniqueAnimeData(data.data)
}

//* Obtener la lista de los 15 primeros mangas populares
export async function getTopMangas() {
  const response = await fetch(`${process.env.API_URL}/top/manga?limit=15`, {
    next: { revalidate: 300 }
  })

  if (!response.ok) throw new Error("Error al obtener los mangas top")
  const data = await response.json()

  return getUniqueAnimeData(data.data)
}

//* Obtener información de un anime específico por ID
export async function getAnimeById(id: number): Promise<Anime> {
  const response = await fetch(`${process.env.API_URL}/anime/${id}/full`, {
    next: { revalidate: 300 }
  })

  if (!response.ok) throw new Error("Error al obtener el anime")
  const data = await response.json()

  return data.data
}

//* Obtener información de un manga específico por ID
export async function getMangaById(id: number): Promise<Anime> {
  const response = await fetch(`${process.env.API_URL}/manga/${id}/full`, {
    next: { revalidate: 300 }
  })

  if (!response.ok) throw new Error("Error al obtener el manga")
  const data = await response.json()

  return data.data
}
