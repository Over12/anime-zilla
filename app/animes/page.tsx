'use client'

import MediaContainer from "@/components/media/MediaContainer";
import { usePaginationMedia } from "@/hooks/usePaginationMedia";

export default function AnimesPage() {
  const { media, loading, previousPage, nextPage, selectPage, selectedPage, changePage, onBlurInput } = usePaginationMedia({ mediaType: "anime" });

  return (
    <>
      <MediaContainer title="Animes" media={media} loading={loading} />
      <div className="flex justify-center items-center mt-10">
        <button onClick={previousPage} className="cursor-pointer text-center px-4 py-2 bg-secondary hover:bg-accent font-semibold rounded">
          Anterior
        </button>
        
        <span className="font-semibold mx-5 text-sm text-center">
          Página <input type="text" value={selectedPage.toString()} onChange={changePage} onBlur={onBlurInput} placeholder="1" className="w-8 h-6 text-center border-b-2 border-accent bg-transparent focus:outline-none" />
          <span> de {media?.pagination?.lastPage}</span>
        </span>

        <button onClick={nextPage} className="cursor-pointer text-center px-4 py-2 bg-secondary hover:bg-accent font-semibold rounded">
          Siguiente
        </button>
      </div>
    </>
  )
}
