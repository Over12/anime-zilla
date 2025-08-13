import { Anime } from "@/types/anime"
import { getUniqueAnimeData } from "./utils"
import { MediaFilter } from "@/types/filters"

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

//* Obtener la lista de animes
export async function getAnimes({ numberPage = 1, filters }: { numberPage?: number, filters: MediaFilter }) {
  const params = new URLSearchParams({
    page: numberPage.toString(),
    sfw: filters.sfw.toString()
  });

  if (filters.q) params.append('q', filters.q);
  if (filters.type) params.append('type', filters.type);
  if (filters.rating) params.append('rating', filters.rating);

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/anime?${params.toString()}`, {
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

//* Obtener la lista de mangas
export async function getMangas({ numberPage = 1, filters }: { numberPage?: number, filters: MediaFilter }) {
  const params = new URLSearchParams({
    page: numberPage.toString(),
    sfw: filters.sfw.toString()
  });

  if (filters.q) params.append('q', filters.q);
  if (filters.type) params.append('type', filters.type);

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/manga?${params.toString()}`, {
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

//* Obtener géneros
export async function getGenres({ type, filter = "genres" }: { type: string, filter?: string }) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/genres/${type}?filter=${filter}`, {
    next: { revalidate: 1800 }
  })

  if (!response.ok) throw new Error("Error al obtener los géneros")
  const data = await response.json()

  return data.data
}
