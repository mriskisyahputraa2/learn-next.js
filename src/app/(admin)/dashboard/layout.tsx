export default function Layout({
  children,
  products,
  analytics,
  books,
  payments,
}: {
  children: React.ReactNode;
  products: React.ReactNode;
  analytics: React.ReactNode;
  books: React.ReactNode;
  payments: React.ReactNode;
}) {
  return (
    <>
      <div className="p-5 ">
        <div>{children}</div>
        <div className="mt-5 flex justify-center items-center">
          {products}
          {analytics}
        </div>
        <div>{books}</div>
        <div>{payments}</div>
      </div>
    </>
  );
}
