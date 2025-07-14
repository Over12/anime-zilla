"use client"

import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "./icons/ArrowIcons";
import { permanentMarker } from "@/styles/fonts";
import { Anime } from "@/types/anime";
import { Manga } from "@/types/manga";
import { useRef } from "react";

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
      <h2 className={`${permanentMarker.className} text-2xl sm:text-3xl text-primary font-bold`}>{title}</h2>
      <div ref={carrouselRef} className="flex overflow-x-auto gap-5 py-5 snap-x hide-scrollbar">
        {data.map((anime) => (
          <Link key={anime.mal_id} href={`/anime/${anime.mal_id}`} className="flex-shrink-0 aspect-[2/3] group">
            <Image
              src={anime.images.webp.large_image_url}
              alt={anime.title}
              width={300}
              height={450}
              className="object-fill rounded-xl h-full w-40 sm:w-52 lg:w-64 snap-center sm:snap-start"
            />
            <h3 className="font-semibold text-sm sm:text-base mt-2 w-40 sm:w-52 lg:w-64 line-clamp-1 group-hover:text-primary transition-colors">{anime.title}</h3>
          </Link>
        ))}
        <button onClick={onLeftClick} className="absolute cursor-pointer hover:scale-110 transition-transform top-1/2 -translate-1/2 left-0 bg-secondary/70 backdrop-blur-lg border-2 border-accent rounded-full p-2 hidden sm:block">
          <ArrowLeftIcon className="text-text" />
        </button>
        <button onClick={onRightClick} className="absolute cursor-pointer hover:scale-110 transition-transform top-1/2 -translate-y-1/2 right-0 translate-x-1/2 bg-secondary/70 backdrop-blur-lg border-2 border-accent rounded-full p-2 hidden sm:block">
          <ArrowRightIcon className="text-text" />
        </button>
      </div>
    </div>
  )
}