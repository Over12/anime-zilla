export interface Manga {
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
  chapters: number | null;
  volumes: number | null;
  status: string;
  publishing: boolean;
  score: number | null;
  scored_by: number | null;
  synopsis: string;
  background: string | null;
}