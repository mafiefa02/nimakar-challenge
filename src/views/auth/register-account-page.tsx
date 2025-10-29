import { AuthErrorHandler } from "-/components/auth-error-handler";
import { RegisterAccountForm } from "-/components/forms/register-account-form";
import { RegisterAccountFormEmailField } from "-/components/forms/register-account-form/fields/register-account-form-email-field";
import { RegisterWithGoogleButton } from "-/components/register-with-google-button";
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
				<CardTitle>Bergabung dengan Nimakar</CardTitle>
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
				<RegisterAccountForm>
					<RegisterAccountFormEmailField />
					<Button
						type="submit"
						variant="secondary"
					>
						Daftar dengan email
					</Button>
				</RegisterAccountForm>
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
				<RegisterWithGoogleButton />
			</CardContent>
		</Card>
	);
};
