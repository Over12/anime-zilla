"use client"

import { getAnimes, getMangas } from "@/lib/api";
import { Anime } from "@/types/anime";
import { ApiResponse } from "@/types/apiResponse";
import { Manga } from "@/types/manga";
import { useEffect, useState } from "react";

export function usePaginationMedia({ mediaType = "manga" }: { mediaType: "anime" | "manga" }) {
  const [numberPage, setNumberPage] = useState(1);
  const [media, setMedia] = useState<ApiResponse<Anime | Manga> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = mediaType === "anime" ? await getAnimes({ numberPage }) : await getMangas({ numberPage });
        setMedia(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [numberPage, mediaType])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  const previousPage = () => {
    if (numberPage > 1) {
      scrollToTop();
      setNumberPage(numberPage - 1);
    }
  }

  const nextPage = () => {
    if (media?.pagination?.hasNextPage) {
      scrollToTop();
      setNumberPage(numberPage + 1);
    }
  }

  return { media, loading, previousPage, nextPage };
}
