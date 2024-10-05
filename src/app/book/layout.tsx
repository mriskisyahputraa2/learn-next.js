import { roboto_mono } from "../../../public/fonts/font";
export default function Layout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      <div className={roboto_mono.className}>{children}</div>
      {modal}
    </>
  );
}
