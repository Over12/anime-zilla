'use client'
import { Anime } from "@/types/anime";
import { Manga } from "@/types/manga";
import Link from "next/link";
import { useState, useRef } from "react";

export default function MediaCard({ item }: { item : Anime | Manga }) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  function handleImageRef(img: HTMLImageElement | null) {
    if (img) {
      if (img.complete && img.naturalHeight !== 0) {
        setImageLoaded(true);
      }
    }
  }

  return (
    <Link href={"episodes" in item ? `/anime/${item.mal_id}` : `/manga/${item.mal_id}`} className="flex-shrink-0 aspect-[2/3] group">
      <div className="relative w-40 sm:w-52 lg:w-64 h-full">
        {!imageLoaded && (
          <div className="absolute inset-0 rounded-xl bg-gray-700 animate-pulse">
          </div>
        )}

        <img
          ref={(img) => {
            imgRef.current = img;
            handleImageRef(img);
          }}
          src={item.images.webp.large_image_url}
          alt={item.title}
          className={`object-fill size-full rounded-xl snap-center sm:snap-start transition-opacity ${imageLoaded ? 'sm:opacity-70 sm:group-hover:opacity-100' : 'opacity-0'}`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      <h3 className="font-semibold text-sm sm:text-base mt-2 w-40 sm:w-52 lg:w-64 line-clamp-1 group-hover:text-primary transition-colors" title={item.title}>{item.title}</h3>
    </Link>
  )
}
