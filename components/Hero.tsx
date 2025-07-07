import data from '@/data/sample-anime.json'
import { getUniqueAnimeData } from '@/lib/utils'

export default function Hero() {
  const animes = getUniqueAnimeData(data.data)

  return (
    <div className="w-screen h-screen px-20 flex items-center justify-center gap-5">
      <div className="w-full">
        <h1 className="text-5xl font-bold text-accent mb-4">Bienvenido a AnimeZilla</h1>
        <p className="text-lg text-text mb-8">
          Tu catálogo de animes y mangas favoritos, donde puedes explorar, descubrir y disfrutar de todo lo relacionado con el mundo del anime.
        </p>
        <button className="bg-secondary px-5 py-2 rounded-tr-xl rounded-bl-xl cursor-pointer hover:scale-105 transition-transform">Explorar ahora</button>
      </div>
      <div className="relative size-full flex justify-center items-center p-5">
        {animes.map((anime, index) => (
          <img
            key={anime.mal_id}
            src={anime.images.webp.large_image_url}
            alt={anime.title}
            title={anime.title}
            loading="lazy"
            style={{
              transform: `translateX(${index * 32}px) scale(${1 - index * 0.05})`,
              zIndex: 5 - index,
              opacity: 1 - index * 0.05
            }}
            className="absolute h-4/6 border-4 border-accent rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
          />
        ))}
      </div>
    </div>
  )
}
