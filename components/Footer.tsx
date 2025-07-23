import { tradeWinds } from "@/styles/fonts"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="flex flex-col item-center justify-center gap-3 border-t border-secondary/30 p-7 sm:px-10 md:px-14 lg:px-20">
      <div className="flex items-center gap-1 mx-auto">
        <img src="/logo.webp" alt="Logo" className="w-7 sm:w-10" />
        <p className={`${tradeWinds.className} text-lg sm:text-xl`}>AnimeZilla</p>
      </div>
      <div className="flex items-center gap-5 mx-auto">
        <Link href="/">Home</Link>
        <Link href="/animes">Animes</Link>
        <Link href="/mangas">Mangas</Link>
        <Link href="https://overcode.netlify.app/" rel="noopener noreferrer" target="_blank">Portfolio</Link>
        <Link href="mailto:avalosfigueroapedro@gmail.com">Contact</Link>
      </div>
      <p className="text-sm mx-auto mt-3 text-gray-400">© 2025 Hecho con ❤️ por <Link href="https://overcode.netlify.app/">Overcode</Link></p>
    </footer>
  )
}