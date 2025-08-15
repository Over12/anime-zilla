export default function MediaContainerSkeleton() {
  return (
    <div className="mt-5 flex flex-wrap justify-around gap-3 sm:gap-5">
      {Array.from({ length: 20 }).map((_, index) => (
        <div className="flex-shrink-0 aspect-[2/3] w-40 sm:w-52 lg:w-64" key={index}>
          <div className="bg-gray-700 h-full rounded-lg animate-pulse"></div>
          <div className="mt-2 h-6 bg-gray-700 rounded w-40 sm:w-52 lg:w-64 animate-pulse"></div>
        </div>
      ))}
    </div>
  )
}