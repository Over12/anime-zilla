//* Este es la pagina principal de la aplicación

import Carrousel from "@/components/Carrousel";
import Hero from "@/components/Hero";
import AnimeData from "@/data/sample-anime.json"
import NavBar from "@/components/NavBar";
import { getUniqueAnimeData } from "@/lib/utils";

export default function Home() {
  const animes = getUniqueAnimeData(AnimeData.data);

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
