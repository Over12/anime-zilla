import Image from "next/image";
import Link from "next/link";
import { permanentMarker } from "@/styles/fonts";
import { Anime } from "@/types/anime";

export default function Carrousel({ title, animeData }: { title: string, animeData: Anime[] }) {
  //TODO: Implementar la lógica para los botones de navegación del carrousel

  return (
    <div className="relative">
      <h2 className={`${permanentMarker.className} text-2xl sm:text-3xl text-primary font-bold`}>{title}</h2>
      <div className="flex overflow-x-auto gap-5 py-5 snap-x hide-scrollbar">
        {animeData.map((anime) => (
          <Link key={anime.mal_id} href={`/anime/${anime.mal_id}`} className="flex-shrink-0 aspect-[2/3] group">
            <Image
              src={anime.images.webp.large_image_url}
              alt={anime.title}
              width={300}
              height={450}
              className="object-cover rounded-xl h-full w-40 sm:w-52 lg:w-64 snap-center sm:snap-start"
            />
            <h3 className="font-semibold text-sm sm:text-base mt-2 w-40 sm:w-52 lg:w-64 line-clamp-1 group-hover:text-primary transition-colors">{anime.title}</h3>
          </Link>
        ))}
        <button className="absolute top-1/2 -translate-1/2 left-0 bg-accent rounded-full p-2 size-10 hidden sm:block">
          <span className="text-sm sm:text-base">&lt;</span>
        </button>
        <button className="absolute top-1/2 -translate-y-1/2 translate-x-1/2 right-0 bg-accent rounded-full p-2 size-10 hidden sm:block">
          <span className="text-sm sm:text-base">&gt;</span>
        </button>
      </div>
    </div>
  )
}