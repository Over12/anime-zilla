export function Badge({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`px-2 py-1 border-2 w-fit rounded-lg ${className}`}>
      {children}
    </div>
  )
}