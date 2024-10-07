import React from "react";
import Image from "next/image";
import Link from "next/link";

import { MuseoModerno } from "next/font/google";
import { cn } from "@/lib/utils";

const museo = MuseoModerno({
	weight: "700",
	subsets: ["latin"],
});

export const Logo = () => {
	return (
		<div>
			<Link href="/" className="flex flex-col items-start">
				<Image src="/logo.svg" alt="logo" width={64} height={64} />
				<h2 className={cn(museo.className, "text-xl")}>Magic Social</h2>
			</Link>
		</div>
	);
};
