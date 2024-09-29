import { NextRequest, NextResponse } from "next/server";
const data = [
  {
    id: 1,
    title: "Nike Dunk Low Retro",
    price: 15000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8caf5d7b-f44e-48e2-82f6-ad62978a6e14/NIKE+DUNK+LOW+RETRO.png",
  },
  {
    id: 2,
    title: "Nike Impact 4",
    price: 80000,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d217f7a3-e68c-4765-9c3f-db145d6131d6/NIKE+AIR+MAX+IMPACT+4.png",
  },
  {
    id: 3,
    title: "Nike Pegasus EasyOn Blueprint",
    price: 20000,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8301a11f-4b63-4034-bd1e-ff080dcad33b/PEGASUS+EASYON+FP.png",
  },
  {
    id: 4,
    title: "Nike Pegasus EasyOn Blueprint",
    price: 20000,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8301a11f-4b63-4034-bd1e-ff080dcad33b/PEGASUS+EASYON+FP.png",
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
