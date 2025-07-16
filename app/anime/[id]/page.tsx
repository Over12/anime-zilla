export default async function AnimePage({ params }: { params: { id: string } }) {
  const { id } = await params;

  return (
    <main>
      <h1>Página de Anime {id}</h1>
    </main>
  );
}
