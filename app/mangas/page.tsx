import MediaContainer from "@/components/media/MediaContainer";
import { getMangas } from "@/lib/api";

export default async function MangasPage() {
  const media = await getMangas({ numberPage: 1 });

  return (
    <>
      <MediaContainer title="Mangas" media={media} />
    </>
  );
}