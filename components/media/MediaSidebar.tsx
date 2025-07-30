import { Anime } from "@/types/anime";
import { Manga } from "@/types/manga";
import { Badge } from "../common/Badge";

function isAnime(media: Anime | Manga): media is Anime {
  return 'episodes' in media;
}

function isManga(media: Anime | Manga): media is Manga {
  return 'chapters' in media && 'volumes' in media;
}

export default function MediaSidebar({ media }: { media: Anime | Manga }) {
  return (
    <div className="sm:px-5 w-full sm:w-2/3 lg:w-3/4">
      <h1 className="hidden sm:block line-clamp-3 leading-tight text-2xl lg:text-4xl font-bold">{media.title}</h1>
      <span className="hidden sm:block line-clamp-2 text-sm font-semibold opacity-70">{media.title_english}</span>
      <div className="hidden sm:flex flex-wrap gap-2 mt-2">
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
      <p className="mt-3">{media.synopsis}</p>
      <h2 className="mt-5 text-lg font-bold">Details</h2>
      <div className="flex flex-wrap gap-2 mt-2">
        <Badge className="text-sm font-semibold bg-primary/50 border-primary">Type: {media.type}</Badge>
        {isAnime(media) && (
          <>
            <Badge className="text-sm font-semibold bg-primary/50 border-primary">Source: {media.source}</Badge>
            <Badge className="text-sm font-semibold bg-primary/50 border-primary">Episodes: {media.episodes ?? "N/A"}</Badge>
            <Badge className="text-sm font-semibold bg-primary/50 border-primary">Status: {media.status}</Badge>
            <Badge className="text-sm font-semibold bg-primary/50 border-primary">Duration: {media.duration}</Badge>
            <Badge className="text-sm font-semibold bg-primary/50 border-primary">Rating: {media.rating}</Badge>
          </>
        )}
        {isManga(media) && (
          <>
            <Badge className="text-sm font-semibold bg-primary/50 border-primary">Chapters: {media.chapters ?? "N/A"}</Badge>
            <Badge className="text-sm font-semibold bg-primary/50 border-primary">Volumes: {media.volumes ?? "N/A"}</Badge>
            <Badge className="text-sm font-semibold bg-primary/50 border-primary">Status: {media.status}</Badge>
          </>
        )}
      </div>
      {isAnime(media) && media.trailer?.embed_url && (
        <>
          <h2 className="mt-5 mb-2 text-lg font-bold">Trailer</h2>
          <div className="aspect-video w-full max-w-2xl mb-5">
            <iframe
              src={media.trailer.embed_url}
              title={`${media.title} Trailer`}
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="size-full rounded-lg border-2 border-primary"
            />
          </div>
        </>
      )}
    </div>
  )
}
