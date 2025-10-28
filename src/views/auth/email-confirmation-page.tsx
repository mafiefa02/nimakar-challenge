import emailConfirmationIllustration from "-/assets/email-illustration.png";
import { Button } from "-/components/shadcn/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "-/components/shadcn/card";
import type { emailConfirmationPageLoader as loader } from "-/loaders/email-confirmation-page-loader";
import { Link, useLoaderData } from "react-router";

export const EmailConfirmationPage = () => {
	const { email } = useLoaderData<typeof loader>();
	return (
		<div className="flex flex-col gap-4">
			<Card>
				<CardHeader className="text-pretty text-center">
					<CardTitle>Periksa Email Anda</CardTitle>
					<CardDescription>
						Kami sudah mengirimkan link pendaftaran ke <strong>{email}</strong>{" "}
						yang berlaku dalam <strong>30 menit</strong>
					</CardDescription>
				</CardHeader>
				<CardContent>
					<img
						src={emailConfirmationIllustration}
						alt="Person holding bunch of mails"
						className="mx-auto h-[158px] w-[184px]"
					/>
				</CardContent>
			</Card>
			<Button asChild>
				<Link to="/auth/login">Ke halaman login</Link>
			</Button>
		</div>
	);
};
