'use client'

import MediaContainer from "@/components/media/MediaContainer";
import { usePaginationMedia } from "@/hooks/usePaginationMedia";
import { Suspense } from "react";

function MangasContent() {
  const { media, loading, updateFilter, previousPage, nextPage, selectedPage, changePage, onBlurInput, onKeyPressInput } = usePaginationMedia({ mediaType: "manga" });

  return (
    <>
      <MediaContainer title="Mangas" media={media} loading={loading} updater={updateFilter} />
      <div className="flex justify-center items-center mt-10">
        <button onClick={previousPage} className="cursor-pointer text-center px-4 py-2 bg-secondary hover:bg-accent font-semibold rounded">
          Previous
        </button>
        
        <span className="font-semibold mx-5 text-sm text-center">
          Page <input type="text" value={selectedPage.toString()} onKeyUp={onKeyPressInput} onChange={changePage} onBlur={onBlurInput} placeholder="1" className="w-8 h-6 text-center border-b-2 border-accent bg-transparent focus:outline-none" />
          <span> of {media?.pagination?.lastPage}</span>
        </span>

        <button onClick={nextPage} className="cursor-pointer text-center px-4 py-2 bg-secondary hover:bg-accent font-semibold rounded">
          Next
        </button>
      </div>
    </>
  );
}

export default function MangasPage() {
  return (
    <Suspense fallback={<div className="flex justify-center items-center h-64"><div className="text-lg">Loading...</div></div>}>
      <MangasContent />
    </Suspense>
  );
}