//* Diseño provisional de la página de carga

export default function LoadingAnime() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh]">
      <span className="animate-spin rounded-full border-4 border-primary border-t-transparent w-12 h-12 mb-4"></span>
      <p className="text-lg font-semibold text-primary">Cargando anime...</p>
    </main>
  );
}