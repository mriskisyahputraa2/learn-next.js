type DetailBookPage = { params: { slug: string[] } };

export default function DetailBookPage(props: DetailBookPage) {
  const { params } = props;

  return (
    <>
      <h1>{params.slug ? "Detail Book Page" : "Book Page"}</h1>

      {params.slug && (
        <>
          <p>Name Book: {params.slug[0]}</p>
          <p>Category: {params.slug[1]}</p>
          <p>Id: {params.slug[2]}</p>
        </>
      )}
    </>
  );
}
