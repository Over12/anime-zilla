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
        <span className="sm:hidden mb-3 line-clamp-2 text-sm font-semibold opacity-70">{anime.title_english}</span>
        <Image
          src={anime.images.webp.large_image_url}
          alt={anime.title}
          width={300}
          height={450}
          className="rounded-xl w-full h-auto"
        />
        <div className="flex flex-wrap gap-2 mt-2">
          <Badge className="flex items-center gap-1 text-sm lg:text-base font-semibold bg-yellow-500/50 border-yellow-500">{anime.score} <StarIcon className={"text-yellow-300 size-4 lg:size-5"} /> ({anime.scored_by})</Badge>
          <Badge className="text-sm lg:text-base font-semibold bg-blue-500/50 border-blue-500">Rank #{anime.rank}</Badge>
          <Badge className="text-sm lg:text-base font-semibold bg-green-500/50 border-green-500">Popularity #{anime.popularity}</Badge>
          <Badge className="text-sm lg:text-base font-semibold bg-red-500/50 border-red-500">Favorites #{anime.favorites}</Badge>
        </div>
      </div>
      <div className="bg-blue-500/20 sm:px-5 w-full sm:w-2/3 lg:w-3/4">
        <h1 className="hidden sm:block line-clamp-3 leading-tight text-2xl lg:text-4xl font-bold">{anime.title}</h1>
        <span className="hidden sm:block line-clamp-2 text-sm font-semibold opacity-70">{anime.title_english}</span>
        <p className="mt-3">{anime.synopsis}</p>
      </div>
    </main>
  );
}
