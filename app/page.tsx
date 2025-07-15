//* Este es la pagina principal de la aplicación

import Carrousel from "@/components/Carrousel"
import Hero from "@/components/Hero"
import NavBar from "@/components/NavBar"
import { getAnimeSeason, getTopAnimes, getTopMangas } from "@/lib/api"

export default async function Home() {
  const season = await getAnimeSeason()
  const animes = await getTopAnimes()
  const mangas = await getTopMangas()

  return (
    <>
      <NavBar />
      <Hero season={season} />
      <section className="flex flex-col gap-5 py-10 px-7 sm:px-10 md:px-14 lg:px-20">
        <Carrousel title="Últimos animes" data={season} />
        <Carrousel title="Top animes" data={animes} />
        <Carrousel title="Top mangas" data={mangas} />
      </section>
    </>
  );
}
