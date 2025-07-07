import { Anime } from "@/types/anime";

export function getUniqueAnimeData(animeList: Anime[]) {
  const uniqueAnime = new Map<number, Anime>();

  animeList.forEach(anime => {
    if (!uniqueAnime.has(anime.mal_id)) {
      uniqueAnime.set(anime.mal_id, anime);
    }
  });

  return Array.from(uniqueAnime.values());
}
