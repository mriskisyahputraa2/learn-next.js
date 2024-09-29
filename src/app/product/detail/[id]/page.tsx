import { getDataProduct } from "@/app/services/products";

export default async function DetailProductPage(props: any) {
  const { params } = props;
  const product = await getDataProduct(
    "http://localhost:3000/api/product/?id=" + params.id
  );
  console.log(product.data);

  return (
    <>
      <div className="container mx-auto my-10">
        <div className="w-1/2 mx-auto border border-gray-700">
          <img
            src={product.data.image}
            alt={product.data.name}
            className="w-full object-cover aspect-square col-span-2"
          />

          <div className="bg-white p-4 px-6">
            <h3 className="font-bold text-2xl">{product.data.title}</h3>
            <p className="font-bold text-sm">Price: ${product.data.price}</p>
          </div>
        </div>
      </div>
    </>
  );
}
