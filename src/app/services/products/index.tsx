// mengambil data products
export const getDataProduct = async (url: string) => {
  //   const res = await fetch("https://fakestoreapi.com/products");
  const res = await fetch(url, {
    cache: "no-store",
    // melakukan update data products berdasarkan time(waktu) menggunakan otomatis
    // next: {
    //   // 1 jam x 24 jam = 1 hari
    //   //   revalidate: 30,
    //   //   tags: ["products"],
    // },
  });

  if (!res.ok) {
    throw new Error("Data Failed");
  }

  return res.json();
};
