'use client'

import MediaContainer from "@/components/media/MediaContainer";
import { usePaginationMedia } from "@/hooks/usePaginationMedia";
import { useState, useEffect } from "react";

export default function AnimesPage() {
  const { media, loading, previousPage, nextPage, selectPage } = usePaginationMedia({ mediaType: "anime" });
  const [selectedPage, setSelectedPage] = useState(media?.pagination?.currentPage?.toString() || '1');

  useEffect(() => {
    if (media?.pagination?.currentPage) {
      setSelectedPage(media.pagination.currentPage.toString());
    }
  }, [media?.pagination?.currentPage]);

  return (
    <>
      <MediaContainer title="Animes" media={media} loading={loading} />
      <div className="flex justify-center items-center mt-10">
        <button onClick={previousPage} className="cursor-pointer text-center px-4 py-2 bg-secondary hover:bg-accent font-semibold rounded">
          Anterior
        </button>
        
        <span className="font-semibold mx-5 text-sm text-center">
          Página <input type="text" value={Number(selectPage)} placeholder="1" className="w-8 h-6 text-center border-b-2 border-accent bg-transparent focus:outline-none" />
          <span> de {media?.pagination?.lastPage}</span>
        </span>

        <button onClick={nextPage} className="cursor-pointer text-center px-4 py-2 bg-secondary hover:bg-accent font-semibold rounded">
          Siguiente
        </button>
      </div>
    </>
  )
}
