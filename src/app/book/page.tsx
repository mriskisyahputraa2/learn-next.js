"use client";

import Link from "next/link";
import { getDataBook } from "../services/books";
import { useEffect, useState } from "react";
import Image from "next/image";

type DetailBookPage = { params: { slug: string[] } };

export default function DetailBookPage(props: DetailBookPage) {
  const { params } = props;
  // const { data: session, status }: { data: any; status: string } = useSession();
  // const router = useRouter();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await getDataBook("http://localhost:3000/api/book");
      setBooks(response.data);
    };

    fetchBooks();
  }, []);

  return (
    <>
      {/* Judul dan Deskripsi */}
      <div className="text-center mt-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          {params.slug ? "Detail Product Page" : "Our Products"}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Explore our range of high-quality books
        </p>
      </div>

      {/* Grid Responsif untuk Book */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10 px-4">
        {books.length > 0 &&
          books.map((book: any) => (
            <Link
              href={`/book/detail/${book.id}`}
              key={book.id}
              className="w-full bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 transition-transform transform hover:scale-105"
            >
              {/* Gambar Book */}
              <Image
                className="p-6 rounded-t-lg w-full h-64 object-contain"
                src={book.image}
                alt={book.title}
                width={500}
                height={500}
                loading="lazy"
              />

              {/* Detail Book */}
              <div className="px-6 pb-6">
                <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                  {book.title}
                </h5>

                {/* Harga dan Tombol */}
                <div className="flex items-center justify-between mt-4">
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    Rp.{book.price}
                  </span>
                  <button
                    href="#"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
}
