import { NextRequest, NextResponse } from "next/server";

const stripe = require("stripe")(
  "sk_test_51O0SpfIp7Gi6g6bxZjbDxD606dWshGOFdgNqYPYcX5bOCf2f8nNk6qA6havARuCS1w1CzpPsQIDrH8MdRBzdqDGf000bsmbuW5"
);

export async function GET(req: NextRequest, res: NextResponse) {
  const secret = req.nextUrl.searchParams.get("secret");

  if (secret !== process.env.API_SECRET_KEY) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  try {
    const orders = await stripe.checkout.sessions.list();

    return NextResponse.json(orders);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
