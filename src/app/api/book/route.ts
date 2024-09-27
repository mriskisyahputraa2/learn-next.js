import { NextResponse, NextRequest } from "next/server";

const data = [
  {
    id: 1,
    name: "Bicara itu ada seninya",
    stok: 100,
    price: 150000,
  },
  {
    id: 2,
    name: "Atomic Habits",
    stok: 200,
    price: 180000,
  },
  {
    id: 3,
    name: "Maaf Tuhan aku hampir Menyerah",
    stok: 10,
    price: 80000,
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    const detailBook = data.find((item) => item.id === Number(id));
    if (detailBook) {
      return NextResponse.json({
        status: 200,
        message: "Detail Book",
        data: detailBook,
      });
    } else {
      return NextResponse.json({
        status: 400,
        message: "No Book Data",
        data: {},
      });
    }
  }

  return NextResponse.json({
    status: 200,
    message: "Success",
    data,
  });
}
