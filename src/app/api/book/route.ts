import { retrieveData, retrieveDataById } from "@/lib/firebase/service";
import { NextResponse, NextRequest } from "next/server";

// const data = [
//   {
//     id: 1,
//     name: "Bicara itu ada seninya",
//     stok: 100,
//     price: 150000,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW4fQU296oAz5fC07vn6rHw4MJ7GPT_gXYUw&s",
//   },
//   {
//     id: 2,
//     name: "Atomic Habits",
//     stok: 200,
//     price: 180000,
//     image:
//       "https://images-cdn.ubuy.co.id/6536b202dd496514413b3c89-atomic-habits-by-james-clear.jpg",
//   },
//   {
//     id: 3,
//     name: "Maaf Tuhan aku hampir Menyerah",
//     stok: 10,
//     price: 80000,
//     image:
//       "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/103/MTA-149237536/no-brand_maaf-tuhan-aku-hampir-menyerah-alfialghazi_full01.jpg",
//   },
// ];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    const detailBook = await retrieveDataById("books", "id");
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

  const books = await retrieveData("books");

  return NextResponse.json({
    status: 200,
    message: "Success",
    data: books,
  });
}
