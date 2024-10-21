import Stripe from "stripe";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

export async function POST(req: Request) {
	try {
		const { userId } = auth();
		if (!userId) {
			return new NextResponse("Unauthorized", { status: 401 });
		}
		const link_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [
			{
				quantity: 1,
				price_data: {
					currency: "usd",
					product_data: {
						name: "10,000 AI Credit",
						description: "all $10 worth of credit",
					},
					unit_amount: 10000,
				},
			},
		];
	} catch (error) {
		console.log(error);
		return new NextResponse("Error", { status: 500 });
	}
}
