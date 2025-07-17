export interface Anime {
  mal_id: number;
  url: string;
  images: {
    jpg: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
    webp: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
  }
  title: string;
  title_english: string | null;
  type: string;
  episodes: number | null;
  status: string;
  airing: boolean;
  rating: string;
  score: number | null;
  scored_by: number | null;
  rank: number | null;
  popularity: number | null;
  favorites: number | null;
  synopsis: string;
  background: string | null;
  season: string | null;
  year: number | null;
  relations?: Relation[];
  streaming?: Streaming[];
}

interface Relation {
  relation: string;
  entry: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }
}

interface Streaming {
  name: string;
  url: string;
}
