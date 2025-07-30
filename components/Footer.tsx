import { tradeWinds } from "@/styles/fonts"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="flex flex-col item-center justify-center gap-3 border-t border-secondary/30 mt-5 p-7 sm:px-10 md:px-14 lg:px-20">
      <div className="flex items-center gap-1 mx-auto">
        <img src="/logo.webp" alt="Logo" className="w-7 sm:w-10" />
        <p className={`${tradeWinds.className} text-lg sm:text-xl`}>AnimeZilla</p>
      </div>
      <div className="flex items-center text-sm sm:text-base gap-3 sm:gap-5 mx-auto">
        <Link href="/">Home</Link>
        <Link href="/animes">Animes</Link>
        <Link href="/mangas">Mangas</Link>
        <Link href="https://overcode.netlify.app/" rel="noopener noreferrer" target="_blank">Portfolio</Link>
        <Link href="mailto:avalosfigueroapedro@gmail.com">Contact</Link>
      </div>
      <p className="text-xs sm:text-sm mx-auto mt-1 sm:mt-3 text-gray-400">© 2025 Hecho con ❤️ por <Link className="bg-clip-text bg-gradient-to-r from-[#748ca8] to-[#6c58c0] text-transparent font-bold" target="_blank" rel="noopener noreferrer" href="https://overcode.netlify.app/">Overcode</Link></p>
    </footer>
  )
}