import { getDataBook } from "@/app/services/books";
import Image from "next/image";

export default async function DetailBookPage(props: any) {
  const { params } = props;
  const book = await getDataBook(
    "http://localhost:3000/api/book/?id=" + params.id
  );
  // console.log(book.data);

  return (
    <>
      <div className="container mx-auto my-10 px-4 h-screen flex items-center justify-center">
        <div className="flex flex-col md:flex-row border border-gray-300 rounded-lg shadow-lg overflow-hidden h-full w-full md:w-3/4">
          <div className="w-full md:w-1/2 h-full">
            <Image
              src={book.data.image}
              alt="book"
              className="w-full h-full object-cover"
              width={500}
              height={500}
            />
          </div>

          <div className="bg-white p-6 md:p-8 flex flex-col justify-center h-full">
            <h3 className="font-bold text-3xl mb-4">{book.data.name}</h3>
            <p className="font-bold text-lg text-gray-700 mb-4">
              Penulis: {book.data.author}
            </p>
            <p className="font-bold text-lg text-gray-700 mb-4">
              Harga: Rp.{book.data.price}
            </p>
            <button className="mt-4 bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-600 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
