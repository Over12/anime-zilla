'use client'

import { MediaFilter as Filter } from "@/types/filters"
import { useEffect, useState } from "react"

export default function MediaFilter({ media_type, updater }: { media_type: string, updater: (filter: Filter) => void }) {
  const [filter, setFilter] = useState<Filter>({ q: null, type: null, rating: null, sfw: true });

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value, type } = event.target;

    if (type === 'checkbox') {
      const checked = (event.target as HTMLInputElement).checked;
      setFilter(prevFilter => ({ ...prevFilter, [name]: checked }));
    } else {
      setFilter(prevFilter => ({ ...prevFilter, [name]: value || null }));
    }
  }

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    updater(filter)
  }

  return (
    <form className="flex gap-5 mt-3" onSubmit={onSubmit}>
      <div className="flex gap-2 justify-center items-center h-full">
        <label htmlFor="media_query" className="text-sm font-semibold">Search:</label>
        <input type="text" id="media_query" name="q" placeholder="Danshi Kōkōsei no Nichijō..." onChange={handleInputChange} className="px-2 py-1 border-b-2 border-accent size-full focus:outline-none" />
      </div>
      <div className="flex gap-2 justify-center items-center h-full">
        <label htmlFor="media_type" className="text-sm font-semibold">Type:</label>
        <select id="media_type" name="type" onChange={handleInputChange} className="bg-background px-2 py-1 border-b-2 border-accent cursor-pointer focus:outline-none">
          {media_type === "animes" && (
            <>
              <option value="">All Types</option>
              <option value="tv">TV</option>
              <option value="movie">Movie</option>
              <option value="ova">OVA</option>
              <option value="special">Special</option>
              <option value="ona">ONA</option>
              <option value="music">Music</option>
              <option value="cm">CM</option>
              <option value="pv">PV</option>
              <option value="tv_special">TV Special</option>
            </>
          )}
          {media_type === "mangas" && (
            <>
              <option value="">All Types</option>
              <option value="manga">Manga</option>
              <option value="novel">Novel</option>
              <option value="lightnovel">Light Novel</option>
              <option value="oneshot">One-Shot</option>
              <option value="doujin">Doujin</option>
              <option value="manhwa">Manhwa</option>
              <option value="manhua">Manhua</option>
            </>
          )}
        </select>
      </div>
      {media_type === "animes" && (
        <div className="flex gap-2 justify-center items-center h-full">
          <label htmlFor="media_rating" className="text-sm font-semibold">Rating:</label>
          <select id="media_rating" name="rating" onChange={handleInputChange} className="bg-background px-2 py-1 border-b-2 border-accent cursor-pointer focus:outline-none">
            <option value="">All Ratings</option>
            <option value="g">G - All Ages</option>
            <option value="pg">PG - Children</option>
            <option value="pg13">PG-13 - Teens 13 or older</option>
            <option value="r17">R - 17+ (Violence & profanity)</option>
            <option value="r">R+ - Mild Nudity</option>
            <option value="rx">Rx - Hentai</option>
          </select>
        </div>
      )}
      <div className="flex gap-2 justify-center items-center">
        <label htmlFor="media_sfw" className="text-sm font-semibold">Safe For Work:</label>
        <input type="checkbox" name="sfw" id="media_sfw" onChange={handleInputChange} checked={filter.sfw} className="size-4 cursor-pointer checked:accent-accent outline-none" />
      </div>
      <button type="submit" className="font-semibold rounded-lg bg-accent py-1 px-3 cursor-pointer hover:bg-secondary transition-colors">Search</button>
    </form>
  )
}
