'use client'

import Link from "next/link"
import { useState } from "react"
import MenuIcon from "./icons/MenuIcons"
import { tradeWinds } from "@/styles/fonts";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const path = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isHome = path === "/";
  const isAnimes = path.startsWith("/animes");
  const isMangas = path.startsWith("/mangas");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="border-b-2 border-secondary sm:border-none bg-background sm:bg-background/90 sm:backdrop-blur-lg px-7 py-3 sm:px-10 md:px-14 lg:px-20 fixed w-full z-50 flex justify-between items-center">
      <Link href="/">
        <div className="flex items-center gap-2">
          <img src="/logo.webp" alt="Logo" className="w-14 sm:w-16" />
          <h1 className={`${tradeWinds.className} text-2xl sm:text-3xl font-bold`}>AnimeZilla</h1>
        </div>
      </Link>
      <ul className="hidden sm:flex gap-5 sm:gap-10 text-base sm:text-lg">
        <li><Link className={`${isHome ? "font-bold" : ""}`} href="/">Home</Link></li>
        <li><Link className={`${isAnimes ? "font-bold" : ""}`} href="/animes">Animes</Link></li>
        <li><Link className={`${isMangas ? "font-bold" : ""}`} href="/mangas">Mangas</Link></li>
      </ul>
      <div className="sm:hidden">
        <button className="flex justify-center items-center cursor-pointer" onClick={toggleMenu}>
          <MenuIcon className="w-9 h-9 text-text" />
        </button>
        <div className={`absolute w-1/2 transition-transform border-l-2 border-secondary top-20 bg-background p-10 right-0 h-screen ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <ul className="flex flex-col gap-5 text-lg">
            <li><Link className={`${isHome ? "font-bold" : ""}`} href="/">Home</Link></li>
            <li><Link className={`${isAnimes ? "font-bold" : ""}`} href="/animes">Animes</Link></li>
            <li><Link className={`${isMangas ? "font-bold" : ""}`} href="/mangas">Mangas</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
