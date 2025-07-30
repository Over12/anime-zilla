export default function MediaHeaderSkeleton() {
  return (
    <div className="w-full sm:w-1/3 lg:w-1/4 sm:sticky sm:top-24 self-start animate-pulse">
      {/* Título móvil */}
      <div className="sm:hidden space-y-2 mb-2">
        <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
      </div>
      
      {/* Badges móvil */}
      <div className="flex sm:hidden flex-wrap gap-2 my-2">
        <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded-full w-20"></div>
        <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded-full w-16"></div>
        <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded-full w-24"></div>
      </div>
      
      {/* Imagen principal */}
      <div className="w-full aspect-[2/3] bg-gray-300 dark:bg-gray-700 rounded-xl mb-2"></div>
      
      {/* Badges de estadísticas */}
      <div className="flex flex-wrap gap-2">
        <div className="h-7 bg-gray-300 dark:bg-gray-700 rounded-full w-24"></div>
        <div className="h-7 bg-gray-300 dark:bg-gray-700 rounded-full w-20"></div>
        <div className="h-7 bg-gray-300 dark:bg-gray-700 rounded-full w-28"></div>
        <div className="h-7 bg-gray-300 dark:bg-gray-700 rounded-full w-32"></div>
      </div>
    </div>
  )
}
