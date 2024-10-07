import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import React from "react";

export const Auth = () => {
	return (
		<div>
			<SignedOut>
				<SignInButton>Sign In</SignInButton>
			</SignedOut>
			<SignedIn>
				<UserButton></UserButton>
			</SignedIn>
		</div>
	);
};
