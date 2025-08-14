"use client"

import { ArrowLeftIcon, ArrowRightIcon } from "./icons/ArrowIcons";
import { permanentMarker } from "@/styles/fonts";
import { Anime } from "@/types/anime";
import { Manga } from "@/types/manga";
import { useRef } from "react";
import MediaCard from "./media/MediaCard";

export default function Carrousel({ title, data }: { title: string, data: (Anime | Manga)[] }) {
  const carrouselRef = useRef<HTMLDivElement>(null);

  function onLeftClick() {
    const carrousel = carrouselRef.current;

    if (carrousel) {
      const scrollAmount = carrousel.scrollLeft - carrousel.clientWidth;
      carrousel.scrollTo({
        left: scrollAmount,
        behavior: "smooth"
      })
    }
  }

  function onRightClick() {
    const carrousel = carrouselRef.current;

    if (carrousel) {
      const scrollAmount = carrousel.scrollLeft + carrousel.clientWidth;
      carrousel.scrollTo({
        left: scrollAmount,
        behavior: "smooth"
      })
    }
  }

  return (
    <div className="relative">
      <h2 className={`${permanentMarker.className} text-2xl sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r to-30% from-primary to-secondary font-bold`}>{title}</h2>
      <div ref={carrouselRef} className="flex overflow-x-auto gap-4 py-5 snap-x hide-scrollbar">
        {data.map((item) => (
          <MediaCard key={item.mal_id} item={item} />
        ))}
        <div className="hidden sm:flex absolute top-0 right-0 gap-3">
          <button onClick={onLeftClick} className="cursor-pointer p-1 transition-opacity opacity-70 hover:opacity-100 border-4 border-primary rounded-full">
            <ArrowLeftIcon className="text-primary size-5" />
          </button>
          <button onClick={onRightClick} className="cursor-pointer p-1 transition-opacity opacity-70 hover:opacity-100 border-4 border-primary rounded-full">
            <ArrowRightIcon className="text-primary size-5" />
          </button>
        </div>
      </div>
    </div>
  )
}