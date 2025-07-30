import { Anime } from "@/types/anime";
import { Manga } from "@/types/manga";
import Image from "next/image";
import { Badge } from "../common/Badge";
import { StarIcon } from "../icons/StarIcon";

//* Type guard para verificar si es un anime
function isAnime(media: Anime | Manga): media is Anime {
  return 'episodes' in media;
}

export default function MediaHeader({ media }: { media: Anime | Manga }) {
  return (
    <div className="w-full sm:w-1/3 lg:w-1/4 sm:sticky sm:top-24 self-start">
      <h1 className="sm:hidden line-clamp-3 leading-tight text-2xl font-bold">{media.title}</h1>
      <span className="sm:hidden line-clamp-2 text-sm font-semibold opacity-70">{media.title_english}</span>
      <div className="flex sm:hidden flex-wrap gap-2 my-2">
        {isAnime(media) && media.season && media.year && (
          <Badge className="text-sm capitalize font-semibold bg-accent/50 border-accent">
            {media.season} {media.year}
          </Badge>
        )}
        {media.genres.map((genre) => (
          <Badge key={genre.mal_id} className="text-sm font-semibold bg-secondary/50 border-primary">
            {genre.name}
          </Badge>
        ))}
      </div>
      <Image
        src={media.images.webp.large_image_url}
        alt={media.title}
        width={300}
        height={450}
        className="rounded-xl w-full h-auto"
      />
      <div className="flex flex-wrap gap-2 my-2">
        {media.score && (
          <Badge className="flex items-center gap-1 text-sm lg:text-base font-semibold bg-yellow-500/50 border-yellow-500">{media.score} <StarIcon className={"text-yellow-300 size-4 lg:size-5"} /> ({media.scored_by})</Badge>
        )}
        {media.rank && (
          <Badge className="text-sm lg:text-base font-semibold bg-blue-500/50 border-blue-500">Rank #{media.rank}</Badge>
        )}
        <Badge className="text-sm lg:text-base font-semibold bg-green-500/50 border-green-500">Popularity #{media.popularity}</Badge>
        <Badge className="text-sm lg:text-base font-semibold bg-red-500/50 border-red-500">Favorites ({media.favorites})</Badge>
      </div>
    </div>
  )
}