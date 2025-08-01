'use client'

import MediaContainer from "@/components/media/MediaContainer";
import { usePaginationMedia } from "@/hooks/usePaginationMedia";

export default function MangasPage() {
  const { media, loading, previousPage, nextPage } = usePaginationMedia({ mediaType: "manga" });

  return (
    <>
      <MediaContainer title="Animes" media={media} loading={loading} />
      <div className="flex justify-center mt-5">
        <button onClick={previousPage} className="mt-5 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Anterior
        </button>

        <span className="mt-5 mx-2 text-lg font-semibold">
          Página {media?.pagination?.currentPage} de {media?.pagination?.lastPage}
        </span>

        <button onClick={nextPage} className="mt-5 ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Siguiente
        </button>
      </div>
    </>
  );
}