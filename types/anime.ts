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
  "trailer": {
    youtube_id: string | null;
    url: string | null;
    embed_url: string | null;
    images: {
      image_url: string | null;
      small_image_url: string | null;
      medium_image_url: string | null;
      large_image_url: string | null;
      maximum_image_url: string | null;
    }
  }
  title: string;
  title_english: string | null;
  type: string;
  source: string;
  episodes: number | null;
  status: string;
  airing: boolean;
  duration: string;
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
  broadcast: Broadcast | null;
  genres: Genre[];
  relations?: Relation[];
  streaming?: Streaming[];
}

interface Broadcast {
  day: string;
  time: string;
  timezone: string;
  string: string;
}

interface Genre {
  mal_id: number;
  type: string;
  name: string;
  url: string;
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
