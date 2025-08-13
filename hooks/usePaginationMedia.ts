"use client"

import { getAnimes, getMangas } from "@/lib/api";
import { Anime } from "@/types/anime";
import { ApiResponse } from "@/types/apiResponse";
import { MediaFilter } from "@/types/filters";
import { Manga } from "@/types/manga";
import { useEffect, useState } from "react";

export function usePaginationMedia({ mediaType = "manga" }: { mediaType: "anime" | "manga" }) {
  const [media, setMedia] = useState<ApiResponse<Anime | Manga> | null>(null);
  const [numberPage, setNumberPage] = useState<number>(1);
  const [filter, setFilter] = useState<MediaFilter>({ q: null, type: null, rating: null, sfw: true });
  const [selectedPage, setSelectedPage] = useState<number | string>(1);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = mediaType === "anime" ? await getAnimes({ numberPage, filters: filter }) : await getMangas({ numberPage, filters: filter });
        setMedia(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
    setSelectedPage(numberPage);
  }, [numberPage, mediaType, filter]);

  const updateFilter = (newFilter: MediaFilter) => {
    setNumberPage(1);
    setFilter(prevFilter => ({ ...prevFilter, ...newFilter }));
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  const selectPage = ({ page }: { page: number }) => {
    if (page >= 1 && page <= (media?.pagination?.lastPage || 1)) {
      scrollToTop();
      setNumberPage(page);
    }
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
  
  const changePage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const page = Number(e.target.value);
    
    if (isNaN(page)) {
      return;
    }

    if (page < 1) {
      setSelectedPage("");
      return;
    }

    if (page > (media?.pagination?.lastPage || 1)) {
      setSelectedPage(media?.pagination?.lastPage || 1);
      return;
    }

    setSelectedPage(page);
  }

  const onBlurInput = () => {
    setSelectedPage(media?.pagination?.currentPage || 1);
  }

  const onKeyPressInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const page = Number(selectedPage);
      if (!isNaN(page) && page >= 1 && page <= (media?.pagination?.lastPage || 1)) {
        selectPage({ page });
      } else {
        setSelectedPage(media?.pagination?.currentPage || 1);
      }
    }
  }

  return { media, updateFilter, loading, previousPage, nextPage, selectedPage, changePage, onBlurInput, onKeyPressInput };
}
