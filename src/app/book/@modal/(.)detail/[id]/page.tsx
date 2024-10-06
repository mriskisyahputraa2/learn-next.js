import { getDataBook } from "@/app/services/books";
import Modal from "@/components/core/Modal";
import Image from "next/image";

export default async function DetailProductPage(props: any) {
  const { params } = props;
  const book = await getDataBook(
    "http://localhost:3000/api/book/?id=" + params.id
  );

  console.log(book.data);

  return (
    <>
      <Modal>
        <Image
          src={book.data.image}
          alt={book.data.name}
          className="w-full object-cover aspect-square col-span-2"
          width={500}
          height={500}
        />

        <div className="bg-white p-4 px-6">
          <h3 className="font-bold text-2xl mb-4">{book.data.name}</h3>
          <p className="text-sm mb-4">Penulis: {book.data.author}</p>
          <p className="text-sm">Harga: Rp.{book.data.price}</p>
        </div>
      </Modal>
    </>
  );
}
