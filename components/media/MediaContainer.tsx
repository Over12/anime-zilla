import { Anime } from "@/types/anime";
import { ApiResponse } from "@/types/apiResponse";
import { Manga } from "@/types/manga";
import MediaCard from "./MediaCard";
import MediaContainerSkeleton from "../ui/MediaContainerSkeleton";

export default function MediaContainer({ title = "Media", media, loading = false }: { title?: string, media: ApiResponse<Anime | Manga> | null, loading?: boolean }) {
  return (
    <main className="px-7 pt-24 sm:px-10 md:px-14 lg:px-20">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">{title}</h1>

      {loading ? (
        <MediaContainerSkeleton />
      ) : (
        <div className="mt-5 flex flex-wrap justify-around gap-3 sm:gap-5">
          {media?.data.map((item) => (
            <MediaCard key={item.mal_id} item={item} />
          ))}
        </div>
      )}
    </main>
  )
}
