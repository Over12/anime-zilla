export default function MediaSidebarSkeleton() {
  return (
    <div className="sm:px-5 w-full sm:w-2/3 lg:w-3/4 animate-pulse">
      {/* Título desktop */}
      <div className="hidden sm:block space-y-3 mb-4">
        <div className="h-8 lg:h-12 bg-gray-300 dark:bg-gray-700 rounded w-4/5"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/5"></div>
      </div>
      
      {/* Badges desktop */}
      <div className="hidden sm:flex flex-wrap gap-2 mb-4">
        <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded-full w-20"></div>
        <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded-full w-16"></div>
        <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded-full w-24"></div>
        <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded-full w-18"></div>
      </div>
      
      {/* Sinopsis */}
      <div className="space-y-2 my-6 sm:mb-6">
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-4/5"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
      </div>
      
      {/* Título "Details" */}
      <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-20 mb-3"></div>
      
      {/* Badges de detalles */}
      <div className="flex flex-wrap gap-2 mb-6">
        <div className="h-7 bg-gray-300 dark:bg-gray-700 rounded-full w-24"></div>
        <div className="h-7 bg-gray-300 dark:bg-gray-700 rounded-full w-28"></div>
        <div className="h-7 bg-gray-300 dark:bg-gray-700 rounded-full w-32"></div>
        <div className="h-7 bg-gray-300 dark:bg-gray-700 rounded-full w-20"></div>
        <div className="h-7 bg-gray-300 dark:bg-gray-700 rounded-full w-26"></div>
        <div className="h-7 bg-gray-300 dark:bg-gray-700 rounded-full w-24"></div>
      </div>
      
      {/* Título "Trailer" */}
      <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-16 mb-3"></div>
      
      {/* Video placeholder */}
      <div className="aspect-video w-full max-w-2xl bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
    </div>
  )
}
