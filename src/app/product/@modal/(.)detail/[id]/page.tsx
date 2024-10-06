import { getDataProduct } from "@/app/services/products";
// import Modal from "@/components/core/Modal";
import dynamic from "next/dynamic";
import Image from "next/image";

// Importing Modal with dynamic routes
const Modal = dynamic(() => import("@/components/core/Modal"));

export default async function DetailProductPage(props: any) {
  const { params } = props;
  const product = await getDataProduct(
    "http://localhost:3000/api/product/?id=" + params.id
  );
  // console.log(product.data);

  return (
    <>
      <Modal>
        <Image
          src={product.data.image}
          alt="Product"
          className="w-full object-cover aspect-square col-span-2"
          width={500}
          height={500}
        />

        <div className="bg-white p-4 px-6">
          <h3 className="font-bold text-2xl mb-4">{product.data.name}</h3>
          <p className=" text-sm">Price: ${product.data.price}</p>
        </div>
      </Modal>
    </>
  );
}
