import { Relation } from "@/types/anime";
import Link from "next/link";

export default function MediaRelations({ relations }: { relations: { relation: string; entry: Relation[] }[] }) {
  if (!relations || relations.length === 0) {
    return null;
  }

  return (
    <section className="px-7 my-5 sm:px-10 md:px-14 lg:px-20">
      <h2 className="text-2xl lg:text-4xl font-bold">Relations</h2>
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {relations.map((relation, index) => (
          <div key={index}>
            <h3 className="text-lg lg:text-xl font-semibold">{relation.relation}</h3>
            <div className="mt-1 w-full max-h-60 border-2 border-accent rounded-tr-xl rounded-bl-xl overflow-y-auto hide-scrollbar">
              {relation.entry.map((entry) => (
                <Link key={entry.mal_id} href={`/${entry.type}/${entry.mal_id}`} className="block px-3 py-2 bg-secondary/50 border-y border-accent hover:bg-secondary transition-colors">
                  <h3 title={entry.name} className="text-base lg:text-lg text-pretty line-clamp-1 font-semibold">{entry.name}</h3>
                  <p className="capitalize text-sm opacity-80">{entry.type}</p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
