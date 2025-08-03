import { permanentMarker } from '@/styles/fonts'
import { Anime } from '@/types/anime'
import Image from 'next/image'

export default function Hero({ season }: { season: Anime[] }) {
  const shuffledSeason = [...season].sort(() => Math.random() - 0.5).slice(0, 10)

  return (
    <section className='relative w-full h-svh overflow-hidden'>
      <div className='hidden size-full place-items-start place-content-center-safe sm:grid grid-cols-3 lg:grid-cols-4 px-5 gap-5'>
        {shuffledSeason.map((anime, index) => (
          <Image
            key={anime.mal_id}
            src={anime.images.webp.large_image_url}
            alt={anime.title}
            width={300}
            height={450}
            priority={true}
            className={`object-fill rounded-xl size-full ${index % 2 === 1 ? "lg:translate-y-24" : "lg:translate-y-7 xl:-translate-y-24"}`}
          />
        ))}
      </div>
      <div className='absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-background from-15% to-black/70 z-10 p-7 sm:p-10 md:p-14 lg:p-20'>
        <h1 className={`${permanentMarker.className} text-2xl sm:text-4xl lg:text-5xl font-bold text-accent`}>Bienvenido a AnimeZilla!</h1>
        <p className='text-center text-sm sm:text-base md:text-lg text-text/70'>Descubre y explora tus animes y mangas favoritos</p>
      </div>
    </section>
  )
}
