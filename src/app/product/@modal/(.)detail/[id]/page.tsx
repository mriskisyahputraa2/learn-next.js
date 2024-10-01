import { getDataProduct } from "@/app/services/products";
import Modal from "@/components/core/Modal";

export default async function DetailProductPage(props: any) {
  const { params } = props;
  const product = await getDataProduct(
    "http://localhost:3000/api/product/?id=" + params.id
  );
  console.log(product.data);

  return (
    <>
      <Modal>
        <img
          src={product.data.image}
          alt={product.data.name}
          className="w-full object-cover aspect-square col-span-2"
        />

        <div className="bg-white p-4 px-6">
          <h3 className="font-bold text-2xl">{product.data.name}</h3>
          <p className="font-bold text-sm">Price: ${product.data.price}</p>
        </div>
      </Modal>
    </>
  );
}
