import MediaHeader from "@/components/media/MediaHeader";
import MediaRelations from "@/components/media/MediaRelations";
import MediaSidebar from "@/components/media/MediaSidebar";
import { getMangaById } from "@/lib/api";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const manga = await getMangaById(Number(id));
  return {
    title: "AnimeZilla - " + manga.title,
    description: manga.synopsis,
    openGraph: {
      title: manga.title,
      description: manga.synopsis,
      url: `https://your-site.com/manga/${manga.mal_id}`,
      images: [
        {
          url: manga.images.webp.large_image_url,
          width: 800,
          height: 600,
        },
      ],
    },
  }
}

export default async function MangaPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const manga = await getMangaById(Number(id));

  return (
    <>
      <main className="flex flex-col sm:flex-row px-7 pt-24 sm:px-10 md:px-14 lg:px-20">
        <MediaHeader media={manga} />
        <MediaSidebar media={manga} />
      </main>
      {manga.relations && manga.relations.length > 0 && (
        <MediaRelations relations={manga.relations} />
      )}
    </>
  )
}
