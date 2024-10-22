import { db } from "@/lib/db";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
	apiVersion: "2024-09-30.acacia",
});

export async function POST(req: Request) {
	const body = await req.text();
	const sig = headers().get("stripe-signature");

	let event;

	try {
		event = stripe.webhooks.constructEvent(
			body,
			sig!,
			process.env.STRIPE_WEBHOOK_SECRET!
		);
	} catch (error) {
		return NextResponse.json({ error: "Invalid Signature" }, { status: 400 });
	}

	const session = event.data.object as Stripe.Checkout.Session;
	const userId = session?.metadata?.userId;

	if (event.type == "checkout.session.completed") {
		if (!userId) {
			console.log("No user");
			return new NextResponse("Invalid sesison", { status: 400 });
		}

		try {
			const findUserByUserID = await db.user.findUnique({
				where: {
					userId: userId,
				},
			});

			if (!findUserByUserID) {
				await db.user.create({
					data: {
						userId: userId,
						totalCredit: 10000 + 10000,
					},
				});
			} else {
				await db.user.update({
					where: {
						userId: userId,
					},
					data: {
						totalCredit: findUserByUserID.totalCredit + 10000,
					},
				});
			}
			console.log("Ok en user");
		} catch (error) {
			console.log("error en user");
			console.log(error);
			return new NextResponse("Invalid User not authorized", { status: 500 });
		}
	} else {
		return new NextResponse("Invalid event", { status: 200 });
	}
	return new NextResponse("Success", { status: 200 });
}
