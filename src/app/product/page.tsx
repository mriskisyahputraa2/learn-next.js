import Link from "next/link";
import { getDataProduct } from "../services/products";
import Image from "next/image";

type DetailProductPage = { params: { slug: string[] } };

export default async function DetailProductPage(props: DetailProductPage) {
  const { params } = props;
  const products = await getDataProduct("http://localhost:3000/api/product");
  // console.log(products.data);
  return (
    <>
      {/* Judul dan Deskripsi */}
      <div className="text-center mt-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          {params.slug ? "Detail Product Page" : "Our Products"}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Explore our range of high-quality products
        </p>
      </div>

      {/* Grid Responsif untuk Produk */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10 px-4">
        {products.data.length > 0 &&
          products.data.map((product: any) => (
            <Link
              href={`/product/detail/${product.id}`}
              key={product.id}
              className="w-full bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 transition-transform transform hover:scale-105"
            >
              {/* Gambar Produk */}
              <Image
                className="p-6 rounded-t-lg w-full h-64 object-contain"
                src={product.image}
                alt={product.name}
                width={500}
                height={500}
                // priority, akan membuat mem-proriataskan gambar dahulu ketika halaman di load(refresh)
                // priority
                loading="lazy"
              />

              {/* Detail Produk */}
              <div className="px-6 pb-6">
                <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                  {product.name}
                </h5>

                {/* Harga dan Tombol */}
                <div className="flex items-center justify-between mt-4">
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    ${product.price}
                  </span>
                  <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Add to cart
                  </button>
                </div>
              </div>
            </Link>
          ))}
      </div>

      {/* Detail Produk jika ada parameter slug */}
      {params.slug && (
        <div className="mt-10 text-gray-800 dark:text-white text-center">
          <p>
            <strong>Name Product:</strong> {params.slug[0]}
          </p>
          <p>
            <strong>Category:</strong> {params.slug[1]}
          </p>
          <p>
            <strong>ID:</strong> {params.slug[2]}
          </p>
        </div>
      )}
    </>
  );
}
