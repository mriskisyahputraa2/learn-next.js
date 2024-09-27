type DetailBookPage = { params: { slug: string[] } };

// mengambil data books
async function getAllDataBook() {
  const res = await fetch("http://localhost:3000/api/book", {
    cache: "force-cache",
    // melakukan update data books berdasarkan time(waktu) menggunakan cara manual
    next: {
      tags: ["books"],
    },
  });

  if (!res.ok) {
    throw new Error("Data Failed");
  }

  return res.json();
}

export default async function DetailBookPage(props: DetailBookPage) {
  //   const { params } = props;
  const books = await getAllDataBook();
  console.log(books.data);

  return (
    <>
      {/* Judul dan Deskripsi */}
      <div className="text-center mt-8">
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Explore our range of high-quality books
        </p>
      </div>

      {/* Grid Responsif untuk Book */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10 px-4">
        {books.data.length > 0 &&
          books.data.map((book: any) => (
            <div
              key={book.id}
              className="w-full bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 transition-transform transform hover:scale-105"
            >
              {/* Gambar Book */}
              <a href="#">
                <img
                  className="p-6 rounded-t-lg w-full h-64 object-contain"
                  src={book.image}
                  alt={book.title}
                />
              </a>

              {/* Detail Book */}
              <div className="px-6 pb-6">
                <a href="#">
                  <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                    {book.title}
                  </h5>
                </a>

                {/* Harga dan Tombol */}
                <div className="flex items-center justify-between mt-4">
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    Rp.{book.price}
                  </span>
                  <a
                    href="#"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
