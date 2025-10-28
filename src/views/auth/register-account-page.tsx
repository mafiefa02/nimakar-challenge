import { AuthErrorHandler } from "-/components/auth-error-handler";
import { RegisterAccountFormFields } from "-/components/forms/register-account-form/register-account-form-fields";
import { RegisterAccountFormProvider } from "-/components/forms/register-account-form/register-account-form-provider";
import { GoogleIcon } from "-/components/icons/google-icon";
import { Button } from "-/components/shadcn/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "-/components/shadcn/card";
import { Separator } from "-/components/shadcn/separator";
import { Link } from "react-router";

export const RegisterAccountPage = () => {
	return (
		<Card className="w-full">
			<CardHeader>
				<CardTitle>Bergabung dengan Rakamin</CardTitle>
				<CardDescription>
					Sudah punya akun?{" "}
					<Link
						to="/auth/login"
						className="text-primary"
					>
						Masuk
					</Link>
				</CardDescription>
			</CardHeader>
			<CardContent className="flex w-full flex-col gap-4">
				<AuthErrorHandler />
				<RegisterAccountFormProvider>
					<RegisterAccountFormFields />
					<Button
						type="submit"
						variant="secondary"
					>
						Daftar dengan email
					</Button>
				</RegisterAccountFormProvider>
				<div className="flex w-full items-center gap-3">
					<Separator
						className="shrink"
						orientation="horizontal"
					/>
					<p>atau</p>
					<Separator
						className="shrink"
						orientation="horizontal"
					/>
				</div>
				<Button variant="outline">
					<GoogleIcon /> Daftar dengan Google
				</Button>
			</CardContent>
		</Card>
	);
};
