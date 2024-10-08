import { getDataProduct } from "@/app/services/products";
import Image from "next/image";

export default async function DetailProductPage(props: any) {
  const { params } = props;
  const product = await getDataProduct(
    "http://localhost:3000/api/product/?id=" + params.id
  );
  // console.log(product.data);

  return (
    <>
      <div className="container mx-auto my-10 px-4 h-screen flex items-center justify-center">
        <div className="flex flex-col md:flex-row border border-gray-300 rounded-lg shadow-lg overflow-hidden h-full w-full md:w-3/4">
          <div className="w-full md:w-1/2 h-full">
            <Image
              src={product.data.image}
              alt="Product"
              className="w-full h-full object-cover"
              width={500}
              height={500}
            />
          </div>

          <div className="bg-white p-6 md:p-8 flex flex-col justify-center h-full">
            <h3 className="font-bold text-3xl mb-4">{product.data.name}</h3>
            <p className="font-bold text-lg text-gray-700 mb-4">
              Price: ${product.data.price}
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
