'use client'
import { Anime } from "@/types/anime";
import { Manga } from "@/types/manga";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function MediaCard({ item }: { item : Anime | Manga }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Link href={"episodes" in item ? `/anime/${item.mal_id}` : `/manga/${item.mal_id}`} className="flex-shrink-0 aspect-[2/3] group">
      <div className="relative w-40 sm:w-52 lg:w-64 h-full">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-xl animate-pulse" />
        )}
        
        <Image
          src={item.images.webp.large_image_url}
          alt={item.title}
          width={300}
          height={450}
          className={`object-fill rounded-xl sm:transition-opacity sm:group-hover:opacity-100 h-full w-40 sm:w-52 lg:w-64 snap-center sm:snap-start ${
            imageLoaded ? 'sm:opacity-70' : 'opacity-0'
          }`}
          loading="lazy"
          sizes="(max-width: 640px) 160px, (max-width: 1024px) 208px, 256px"
          priority={false}
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      <h3 className="font-semibold text-sm sm:text-base mt-2 w-40 sm:w-52 lg:w-64 line-clamp-1 group-hover:text-primary transition-colors" title={item.title}>{item.title}</h3>
    </Link>
  )
}
