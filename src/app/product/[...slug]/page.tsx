type DetailProductPage = { params: { slug: string[] } };

export default function DetailProductPage(props: DetailProductPage) {
  const { params } = props;
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
