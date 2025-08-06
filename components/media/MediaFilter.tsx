'use client'

import { useState } from "react";

//TODO: Mejorar el componente MediaFilter para simplificar la búsqueda y filtrado de medios
export default function MediaFilter({ media_type }: { media_type?: string }) {
  return (
    <form className="flex items-center h-10 gap-5 w-full">
      <div className="flex items-center gap-2 h-full">
        <input type="text" name="search" id="search" placeholder="Search..." className="px-2 py-1 border-b-2 border-accent focus:outline-none" />
      </div>
      <div className="flex items-center gap-2 h-full">
        <label htmlFor="type_media">Type:</label>
        <select className="px-2 py-1 border-b-2 bg-background border-accent cursor-pointer focus:outline-none" name="type_media" id="type_media">
          <option value="tv">TV</option>
          <option value="movie">Movie</option>
          <option value="ova">OVA</option>
          <option value="special">Special</option>
          <option value="ona">ONA</option>
          <option value="music">Music</option>
          <option value="cm">CM</option>
          <option value="pv">PV</option>
          <option value="tv_special">TV Special</option>
        </select>
      </div>
      <div className="flex items-center gap-2 h-full">
        <label htmlFor="score">Score:</label>
        <input type="range" name="score" id="score" min="0" max="10" step="0.1" className="appearance-none w-24 h-1.5 bg-secondary accent-accent rounded-lg" />
      </div>
      <button className="px-4 h-full cursor-pointer font-semibold rounded-lg bg-secondary hover:bg-accent transition-colors">Search</button>
    </form>
  )
}
