import MediaHeaderSkeleton from "./MediaHeaderSkeleton";
import MediaSidebarSkeleton from "./MediaSidebarSkeleton";

export default function MediaPageSkeleton() {
  return (
    <>
      <main className="flex flex-col sm:flex-row px-7 pt-24 sm:px-10 md:px-14 lg:px-20">
        <MediaHeaderSkeleton />
        <MediaSidebarSkeleton />
      </main>
      
      {/* Relations skeleton */}
      <section className="px-7 my-5 sm:px-10 md:px-14 lg:px-20 animate-pulse">
        <div className="h-8 lg:h-12 bg-gray-300 dark:bg-gray-700 rounded w-32 mb-4"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="space-y-2">
              <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-24"></div>
              <div className="border-2 border-gray-300 dark:border-gray-600 rounded-tr-xl rounded-bl-xl p-3 space-y-2">
                <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-16"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
