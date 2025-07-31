export type ApiResponse<T> = {
  pagination?: {
    currentPage: number;
    lastPage: number;
    hasNextPage: boolean;
  },
  data: T[];
}
