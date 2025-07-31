import MediaContainer from "@/components/media/MediaContainer";
import { getAnimes } from "@/lib/api";

export default async function AnimesPage() {
  const media = await getAnimes({ numberPage: 1 })

  return (
    <>
      <MediaContainer title="Animes" media={media} />
    </>
  )
}
