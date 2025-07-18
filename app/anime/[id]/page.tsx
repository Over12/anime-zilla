import { Badge } from "@/components/common/Badge";
import { StarIcon } from "@/components/icons/StarIcon";
import { getAnimeById } from "@/lib/api";
import Image from "next/image";

export default async function AnimePage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const anime = await getAnimeById(Number(id));

  return (
    <main className="flex flex-col sm:flex-row px-7 pt-24 sm:px-10 md:px-14 lg:px-20">
      <div className="w-full sm:w-1/3 lg:w-1/4">
        <h1 className="sm:hidden line-clamp-3 leading-tight text-2xl font-bold">{anime.title}</h1>
        <span className="sm:hidden line-clamp-2 text-sm font-semibold opacity-70">{anime.title_english}</span>
        <div className="flex sm:hidden flex-wrap gap-2 my-2">
          {anime.season && anime.year && (
            <Badge className="text-sm capitalize font-semibold bg-accent/50 border-accent">
              {anime.season} {anime.year}
            </Badge>
          )}
          {anime.genres.map((genre) => (
            <Badge key={genre.mal_id} className="text-sm font-semibold bg-secondary/50 border-primary">
              {genre.name}
            </Badge>
          ))}
        </div>
        <Image
          src={anime.images.webp.large_image_url}
          alt={anime.title}
          width={300}
          height={450}
          className="rounded-xl w-full h-auto"
        />
        <div className="flex flex-wrap gap-2 my-2">
          {anime.score && (
            <Badge className="flex items-center gap-1 text-sm lg:text-base font-semibold bg-yellow-500/50 border-yellow-500">{anime.score} <StarIcon className={"text-yellow-300 size-4 lg:size-5"} /> ({anime.scored_by})</Badge>
          )}
          {anime.rank && (
            <Badge className="text-sm lg:text-base font-semibold bg-blue-500/50 border-blue-500">Rank #{anime.rank}</Badge>
          )}
          <Badge className="text-sm lg:text-base font-semibold bg-green-500/50 border-green-500">Popularity #{anime.popularity}</Badge>
          <Badge className="text-sm lg:text-base font-semibold bg-red-500/50 border-red-500">Favorites #{anime.favorites}</Badge>
        </div>
      </div>
      <div className="sm:px-5 w-full sm:w-2/3 lg:w-3/4">
        <h1 className="hidden sm:block line-clamp-3 leading-tight text-2xl lg:text-4xl font-bold">{anime.title}</h1>
        <span className="hidden sm:block line-clamp-2 text-sm font-semibold opacity-70">{anime.title_english}</span>
        <div className="hidden sm:flex flex-wrap gap-2 mt-2">
          {anime.season && anime.year && (
            <Badge className="text-sm capitalize font-semibold bg-accent/50 border-accent">
              {anime.season} {anime.year}
            </Badge>
          )}
          {anime.genres.map((genre) => (
            <Badge key={genre.mal_id} className="text-sm font-semibold bg-secondary/50 border-primary">
              {genre.name}
            </Badge>
          ))}
        </div>
        <p className="mt-3">{anime.synopsis}</p>
        <h2 className="mt-5 text-lg font-bold">Details</h2>
        <div className="flex flex-wrap gap-2 mt-2">
          <Badge className="text-sm font-semibold bg-primary/50 border-primary">Type: {anime.type}</Badge>
          <Badge className="text-sm font-semibold bg-primary/50 border-primary">Source: {anime.source}</Badge>
          <Badge className="text-sm font-semibold bg-primary/50 border-primary">Episodes: {anime.episodes ?? "N/A"}</Badge>
          <Badge className="text-sm font-semibold bg-primary/50 border-primary">Status: {anime.status}</Badge>
          <Badge className="text-sm font-semibold bg-primary/50 border-primary">Duration: {anime.duration}</Badge>
          <Badge className="text-sm font-semibold bg-primary/50 border-primary">Rating: {anime.rating}</Badge>
        </div>
        {anime.trailer?.embed_url && (
          <>
            <h2 className="mt-5 mb-2 text-lg font-bold">Trailer</h2>
            <div className="aspect-video w-full max-w-2xl mb-5">
              <iframe
                src={anime.trailer.embed_url}
                title={`${anime.title} Trailer`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="size-full rounded-lg border-2 border-primary"
              />
            </div>
          </>
        )}
      </div>
    </main>
  );
}
