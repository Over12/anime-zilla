import { Anime } from "@/types/anime"
import { getUniqueAnimeData } from "./utils"

//* Obtener la lista de animes de la temporada actual
export async function getAnimeSeason() {
  const response = await fetch(`${process.env.API_URL}/seasons/now`, {
    next: { revalidate: 300 }
  })

  if (!response.ok) throw new Error("Error al obtener la temporada")
  const data = await response.json()

  return getUniqueAnimeData(data.data)
}

//* Obtener la lista de animes populares
export async function getTopAnimes() {
  const response = await fetch(`${process.env.API_URL}/top/anime`, {
    next: { revalidate: 300 }
  })

  if (!response.ok) throw new Error("Error al obtener los animes top")
  const data = await response.json()

  return getUniqueAnimeData(data.data)
}

//* Obtener la lista de mangas populares
export async function getTopMangas() {
  const response = await fetch(`${process.env.API_URL}/top/manga`, {
    next: { revalidate: 300 }
  })

  if (!response.ok) throw new Error("Error al obtener los mangas top")
  const data = await response.json()

  return getUniqueAnimeData(data.data)
}

//* Obtener la lista de animes populares
export async function getAnimes({ numberPage = 1 }: { numberPage?: number } = {}) {
  const response = await fetch(`${process.env.API_URL}/top/anime?page=${numberPage}`, {
    next: { revalidate: 300 }
  })

  if (!response.ok) throw new Error("Error al obtener los animes")
  const data = await response.json()

  const animes = getUniqueAnimeData(data.data)
  return {
    pagination: {
      currentPage: data.pagination.current_page,
      lastPage: data.pagination.last_visible_page,
      hasNextPage: data.pagination.has_next_page
    },
    data: animes
  }
}

//* Obtener la lista de mangas populares
export async function getMangas({ numberPage = 1 }: { numberPage?: number } = {}) {
  const response = await fetch(`${process.env.API_URL}/top/manga?page=${numberPage}`, {
    next: { revalidate: 300 }
  })

  if (!response.ok) throw new Error("Error al obtener los mangas")
  const data = await response.json()

  const mangas = getUniqueAnimeData(data.data)
  return {
    pagination: {
      currentPage: data.pagination.current_page,
      lastPage: data.pagination.last_visible_page,
      hasNextPage: data.pagination.has_next_page
    },
    data: mangas
  }
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
