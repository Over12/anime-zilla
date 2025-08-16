"use client"

import { getAnimes, getMangas } from "@/lib/api";
import { Anime } from "@/types/anime";
import { ApiResponse } from "@/types/apiResponse";
import { MediaFilter } from "@/types/filters";
import { Manga } from "@/types/manga";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export function usePaginationMedia({ mediaType = "manga" }: { mediaType: "anime" | "manga" }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const initialPage = Number(searchParams.get("page")) || 1;
  const initialFilter: MediaFilter = {
    q: searchParams.get("q") || null,
    type: searchParams.get("type") as any || null,
    rating: searchParams.get("rating") as any || null,
    sfw: searchParams.get("sfw") === "false" ? false : true,
  };

  const [media, setMedia] = useState<ApiResponse<Anime | Manga> | null>(null);
  const [filter, setFilter] = useState<MediaFilter>(initialFilter);
  const [selectedPage, setSelectedPage] = useState<number | string>(initialPage);
  const [loading, setLoading] = useState<boolean>(true);
  const [numberPage, setNumberPage] = useState<number>(initialPage);

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

  useEffect(() => {
    updateURL();
  }, [numberPage, filter]);

  useEffect(() => {
    const currentPage = Number(searchParams.get("page")) || 1;
    const urlFilter: MediaFilter = {
      q: searchParams.get("q") || null,
      type: searchParams.get("type") as any || null,
      rating: searchParams.get("rating") as any || null,
      sfw: searchParams.get("sfw") === "false" ? false : true,
    };

    if (currentPage !== numberPage) {
      setNumberPage(currentPage);
    }

    const filtersChanged = 
      filter.q !== urlFilter.q ||
      filter.type !== urlFilter.type ||
      filter.rating !== urlFilter.rating ||
      filter.sfw !== urlFilter.sfw;

    if (filtersChanged) {
      setFilter(urlFilter);
    }
  }, [searchParams]);

  const updateURL = () => {
    const currentUrlPage = Number(searchParams.get("page")) || 1;
    const currentUrlFilter: MediaFilter = {
      q: searchParams.get("q") || null,
      type: searchParams.get("type") as any || null,
      rating: searchParams.get("rating") as any || null,
      sfw: searchParams.get("sfw") === "false" ? false : true,
    };

    const pageChanged = currentUrlPage !== numberPage;
    const filtersChanged = 
      filter.q !== currentUrlFilter.q ||
      filter.type !== currentUrlFilter.type ||
      filter.rating !== currentUrlFilter.rating ||
      filter.sfw !== currentUrlFilter.sfw;

    if (pageChanged || filtersChanged) {
      const queryParams = new URLSearchParams();
      queryParams.append("page", String(numberPage));
      if (filter.q) queryParams.append("q", filter.q);
      if (filter.type) queryParams.append("type", filter.type);
      if (filter.rating) queryParams.append("rating", filter.rating);
      if (filter.sfw !== undefined) queryParams.append("sfw", String(filter.sfw));

      const queryString = queryParams.toString();
      router.push(`?${queryString}`);
    }
  };

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
      const newPage = numberPage - 1;
      setNumberPage(newPage);
    }
  }

  const nextPage = () => {
    if (media?.pagination?.hasNextPage) {
      scrollToTop();
      const newPage = numberPage + 1;
      setNumberPage(newPage);
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

  return { media, updateFilter, filter, loading, previousPage, nextPage, selectedPage, changePage, onBlurInput, onKeyPressInput };
}
