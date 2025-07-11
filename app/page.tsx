//* Este es la pagina principal de la aplicación

import Carrousel from "@/components/Carrousel"
import Hero from "@/components/Hero"
import NavBar from "@/components/NavBar"
import { getAnimeSeason } from "@/lib/api"

export default async function Home() {
  const animes = await getAnimeSeason()

  return (
    <>
      <NavBar />
      <Hero />
      <section className="py-10 px-7 sm:px-10 md:px-14 lg:px-20">
        <Carrousel title="Últimos animes" animeData={animes} />
        <Carrousel title="Top animes" animeData={animes} />
        <Carrousel title="Top mangas" animeData={animes} />
      </section>
    </>
  );
}
