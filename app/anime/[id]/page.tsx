import { Badge } from "@/components/common/Badge";
import { StarIcon } from "@/components/icons/StarIcon";
import { getAnimeById } from "@/lib/api";
import type { Metadata } from "next"
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const { id } = await params;
  const anime = await getAnimeById(Number(id));
  return {
    title: "AnimeZilla - " + anime.title,
    description: anime.synopsis,
    openGraph: {
      title: anime.title,
      description: anime.synopsis,
      url: `https://your-site.com/anime/${anime.mal_id}`,
      images: [
        {
          url: anime.images.webp.large_image_url,
          width: 800,
          height: 600,
        },
      ],
    },
  }
}

export default async function AnimePage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const anime = await getAnimeById(Number(id));

  return (
    <>
      <main className="flex flex-col sm:flex-row px-7 pt-24 sm:px-10 md:px-14 lg:px-20">
        <div className="w-full sm:w-1/3 lg:w-1/4 sm:sticky sm:top-24 self-start">
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
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="size-full rounded-lg border-2 border-primary"
                />
              </div>
            </>
          )}
        </div>
      </main>
      <section className="px-7 mt-5 sm:px-10 md:px-14 lg:px-20">
          <h2 className="text-2xl lg:text-4xl font-bold">Relations</h2>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {anime.relations?.map((relation, index) => (
              <div key={index}>
                <h3 className="text-lg lg:text-xl font-semibold">{relation.relation}</h3>
                <div className="mt-1 w-full max-h-60 border-2 border-accent rounded-tr-xl rounded-bl-xl overflow-y-auto hide-scrollbar">
                  {relation.entry.map((entry) => (
                    <Link key={entry.mal_id} href={`/anime/${entry.mal_id}`} className="block px-3 py-2 bg-secondary/50 border-y border-accent hover:bg-secondary transition-colors">
                      <h3 title={entry.name} className="text-base lg:text-lg text-pretty line-clamp-1 font-semibold">{entry.name}</h3>
                      <p className="capitalize text-sm opacity-80">{entry.type}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
      </section>
    </>
  );
}
