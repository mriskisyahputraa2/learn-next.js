import { NextRequest, NextResponse } from "next/server";
const data = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: 100000,
  },
  {
    id: 2,
    name: "Baju Baru",
    price: 100000,
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
