import { Anime } from "@/types/anime";
import { ApiResponse } from "@/types/apiResponse";
import { Manga } from "@/types/manga";
import MediaCard from "./MediaCard";
import MediaContainerSkeleton from "../ui/MediaContainerSkeleton";
import MediaFilter from "./MediaFilter";
import { MediaFilter as Filter } from "@/types/filters";
import { tradeWinds } from "@/styles/fonts";

export default function MediaContainer({ title = "Media", media, loading = false, updater }: { title?: string, media: ApiResponse<Anime | Manga> | null, loading?: boolean, updater: (filter: Filter) => void }) {
  return (
    <main className="px-3.5 pt-24 sm:px-10 md:px-14 lg:px-20">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">{title}</h1>
      <MediaFilter media_type={title.toLowerCase()} updater={updater} />

      {loading ? (
        <MediaContainerSkeleton />
      ) : (
        <div className="mt-5 flex flex-wrap justify-around gap-3 sm:gap-5">
          {media?.data.length === 0 && (
            <p className={`${tradeWinds.className} text-gray-400 h-60 flex items-center`}>No results found.</p>
          )}
          {media?.data.map((item) => (
            <MediaCard key={item.mal_id} item={item} />
          ))}
        </div>
      )}
    </main>
  )
}
