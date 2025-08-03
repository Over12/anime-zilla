'use client'

import { useState } from "react";

export default function MediaFilter({ media_type }: { media_type?: string }) {
  const [media_order, setMediaOrder] = useState<string>("top_media");

  const handleMediaOrderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMediaOrder(event.target.value);
  };

  return (
    <form className="flex items-center h-10 gap-5 w-full">
      <input name="media_name" type="text" placeholder="Buscar..." className="px-2 h-full border-b border-accent focus:outline-none" />
      {media_type === "animes" && (
        <select name="media_order" onChange={handleMediaOrderChange} className="px-2 h-full border-b border-accent bg-background focus:outline-none">
          <option value="top_media">All Animes</option>
          <option value="season_anime">Seasonal Animes</option>1
        </select>
      )}
      <div className="flex items-center gap-2 h-full w-40">
        <label htmlFor="media_type" className="text-center">Type:</label>
        <select name="media_type" className="px-2 size-full border-b border-accent bg-background focus:outline-none">
          <option value="all">All</option>
          {media_type === "animes" ? (
            <>
              <option value="tv">TV</option>
              <option value="movie">Movie</option>
              <option value="ova">OVA</option>
              <option value="special">Special</option>
              <option value="ona">ONA</option>
              <option value="music">Music</option>
              {media_order === "top_anime" && (
                <>
                  <option value="cm">CM</option>
                  <option value="pv">PV</option>
                  <option value="tv_special">TV Special</option>
                </>
              )}
            </>
          ) : (
            <>
              <option value="manga">Manga</option>
              <option value="novel">Novel</option>
              <option value="light_novel">Light Novel</option>
              <option value="one_shot">One Shot</option>
              <option value="doujin">Doujin</option>
              <option value="manhwa">Manhwa</option>
              <option value="manhua">Manhua</option>
            </>
          )}
        </select>
      </div>
      {media_order === "top_media" && (
        <div className="flex items-center gap-2 h-full">
          <label htmlFor="media_filter" className="text-center">Filter:</label>
          <select name="media_filter" className="px-2 size-full border-b border-accent bg-background focus:outline-none">
            <option value="all">All</option>
            <option value={media_type === "animes" ? "airing" : "publishing"}>{media_type === "animes" ? "Airing" : "Publishing"}</option>
            <option value="upcoming">Upcoming</option>
            <option value="bypopularity">By Popularity</option>
            <option value="favorite">Favorite</option>
          </select>
        </div>
      )}
      {media_type === "animes" && media_order === "top_media" && (
        <div className="flex items-center gap-2 h-full">
          <label htmlFor="media_rating" className="text-center">Rating:</label>
          <select name="media_rating" className="px-2 size-full border-b border-accent bg-background focus:outline-none">
            <option value="all">All</option>
            <option value="g">G - All Ages</option>
            <option value="pg">PG - Children</option>
            <option value="pg13">PG-13 - Teens 13 or older</option>
            <option value="r17">R - 17+ (Violence & profanity)</option>
            <option value="r">R+ - Mild Nudity</option>
            <option value="rx">Rx - Hentai</option>
          </select>
        </div>
      )}
      {media_type === "animes" && (
        <div className="flex items-center gap-1 h-full">
          <input type="checkbox" name="adult_anime" className="h-4 w-4 accent-accent focus:ring-accent" />
          <label htmlFor="adult_anime" className=" text-center">SFW</label>
        </div>
      )}
      <button className="px-4 h-full cursor-pointer font-semibold rounded-lg bg-secondary hover:bg-accent transition-colors">Buscar</button>
    </form>
  )
}
