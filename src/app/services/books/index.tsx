// mengambil data books
export const getDataBook = async (url: string) => {
  const res = await fetch(url, {
    cache: "no-store",
    // melakukan update data books berdasarkan time(waktu) menggunakan cara manual
    next: {
      // tags: ["books"],
    },
  });

  if (!res.ok) {
    throw new Error("Data Failed");
  }

  return res.json();
};
