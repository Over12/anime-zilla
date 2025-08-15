import MediaHeader from "@/components/media/MediaHeader";
import MediaRelations from "@/components/media/MediaRelations";
import MediaSidebar from "@/components/media/MediaSidebar";
import { getAnimeById } from "@/lib/api";
import type { Metadata } from "next"

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
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

export default async function AnimePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const anime = await getAnimeById(Number(id));

  return (
    <>
      <main className="flex flex-col sm:flex-row px-7 pt-24 sm:px-10 md:px-14 lg:px-20">
        <MediaHeader media={anime} />
        <MediaSidebar media={anime} />
      </main>
      {anime.relations && anime.relations.length > 0 && (
        <MediaRelations relations={anime.relations} />
      )}
    </>
  );
}
