import { getDataBook } from "@/app/services/books";
import Modal from "@/components/core/Modal";

export default async function DetailProductPage(props: any) {
  const { params } = props;
  const book = await getDataBook(
    "http://localhost:3000/api/book/?id=" + params.id
  );

  console.log(book.data);

  return (
    <>
      <Modal>
        <img
          src={book.data.image}
          alt={book.data.name}
          className="w-full object-cover aspect-square col-span-2"
        />

        <div className="bg-white p-4 px-6">
          <h3 className="font-bold text-2xl">{book.data.name}</h3>
          <p className="font-bold text-sm">Price: ${book.data.price}</p>
        </div>
      </Modal>
    </>
  );
}
