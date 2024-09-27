type DetailProductPage = { params: { slug: string[] } };

async function getAllDataProduct() {
  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) {
    throw new Error("Data Failed");
  }

  return res.json();
}

export default async function DetailProductPage(props: DetailProductPage) {
  const { params } = props;
  const products = await getAllDataProduct();
  console.log(products);
  return (
    <>
      <h1>Detail Product Page</h1>
      <h2>{params.slug}</h2>
      <p>Category: {params.slug[0]}</p>
      <p>Gender: {params.slug[1]}</p>
      <p>Id: {params.slug[2]}</p>
    </>
  );
}
