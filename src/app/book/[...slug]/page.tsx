type DetailBookPage = { params: { slug: string[] } };

async function getAllDataBook() {
  const res = await fetch("http://localhost:3000/api/book", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Error fetching");
  }

  return res.json();
}

export default async function DetailBookPage(props: DetailBookPage) {
  const { params } = props;
  const books = await getAllDataBook();
  console.log(books.data);

  return (
    <>
      <h1 className="text-3xl font-bold text-gray-800">Detail Books</h1>
      <p>Name: {params.slug[0]}</p>
      <p>ID: {params.slug[1]}</p>
    </>
  );
}
