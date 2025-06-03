'use client'

import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [path, setPath] = useState("");

  useEffect(() => {
    const handlePathChange = () => {
      setPath(window.location.pathname);
    }

    handlePathChange()
    window.addEventListener("popstate", handlePathChange)

    return () => {
      window.removeEventListener("popstate", handlePathChange)
    }
  }, [])

  const isHome = path === "/";
  const isAnimes = path.startsWith("/animes");
  const isMangas = path.startsWith("/mangas");

  return (
    <nav className="bg-secondary border-accent border-b-2 px-20 py-3 fixed w-full z-50 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img src="/logo.webp" alt="Logo" className="w-16" />
        <h1 className="text-3xl font-bold">AnimeZilla</h1>
      </div>
      <ul className="flex gap-10 text-lg">
        <li><Link className={`${isHome ? "font-bold" : ""}`} href="/">Inicio</Link></li>
        <li><Link className={`${isAnimes ? "font-bold" : ""}`} href="/animes">Animes</Link></li>
        <li><Link className={`${isMangas ? "font-bold" : ""}`} href="/mangas">Mangas</Link></li>
      </ul>
    </nav>
  )
}
