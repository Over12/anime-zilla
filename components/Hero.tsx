import data from '@/data/sample-anime.json'
import Image from 'next/image'
import { getUniqueAnimeData } from '@/lib/utils'

export default function Hero() {
  const animes = getUniqueAnimeData(data.data)

  return (
    <section className='w-full h-svh px-20'>
      <div className='absolute bg-background/85 top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center text-center'>
        <h1 className='text-5xl font-bold text-accent'>Bienvenido a AnimeZilla!</h1>
        <p className='mt-3 text-lg font-semibold' >Tu catálogo de anime y manga favorito.</p>
      </div>
      <div className='absolute top-0 bottom-0 left-0 right-0 -z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-5 overflow-hidden'>
        {animes.map((anime, index) => (
          <Image
            key={anime.mal_id}
            src={anime.images.webp.large_image_url}
            alt={anime.title}
            width={500}
            height={750}
            className={`object-cover rounded-lg ${index % 2 === 1 ? "md:-translate-y-60 lg:translate-0 xl:-translate-y-60" : ""}`}
          />
        ))}
      </div>
    </section>
  )
}
