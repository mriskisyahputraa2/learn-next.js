import { NextRequest, NextResponse } from "next/server";
const data = [
  {
    id: 1,
    title: "Sepatu Baru",
    price: 100000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8caf5d7b-f44e-48e2-82f6-ad62978a6e14/NIKE+DUNK+LOW+RETRO.png",
  },
  {
    id: 2,
    title: "Sepatu Nike",
    price: 100000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8caf5d7b-f44e-48e2-82f6-ad62978a6e14/NIKE+DUNK+LOW+RETRO.png",
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id) {
    const detailProduct = data.find((item) => item.id === Number(id));

    if (detailProduct) {
      return NextResponse.json({
        status: 200,
        data: detailProduct,
        message: "Detail Product",
      });
    } else {
      return NextResponse.json({
        status: 404,
        data: {},
        message: "No Product Data",
      });
    }
  }
  return NextResponse.json({
    status: 200,
    message: "Success",
    data,
  });
}
